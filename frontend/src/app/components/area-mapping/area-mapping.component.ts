import { Component, NgZone } from '@angular/core';
import { Icon } from './../../models/icon.model';
import { Coordinate } from './../../models/coordinate.model';
import { Floor } from './../../models/floor.model';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ConstructionService } from './../../services/construction.service';

@Component({
    selector: 'area-mapping',
    templateUrl: 'area-mapping.component.html',
    styleUrls: ['area-mapping.component.scss']
})

export class AreaMappingComponent {

    barLevelStartIndex: any = new BehaviorSubject("");

    private map: any;
    private mapLayer: L.LayerGroup;
    private imageMap: any;

    private currentMark: any;
    private currentTool: any;
    private currentFloor: Floor;
    private currentPosition: any = { old: null, new: null };

    constructor(private _ngZone: NgZone, private construtionService: ConstructionService) { 
        this.updateExternalEnv();
    }

    toolChanged(e) {
        this.currentTool = e.tool;
        if (this.currentTool !== null && this.currentTool.name.length > 0) {
            this.currentMark = L.icon({
                iconUrl: `assets/maps/markers/${this.currentTool.name}.png`,
                iconSize: this.currentTool.size,
            });
        } else {
            this.currentMark = null;
        }
    }

    floorChanged(e) {
        this.mapLayer.clearLayers();
        this.currentFloor = e.floor;
        if (this.currentFloor !== null) {
            const bounds = new L.LatLngBounds(this.currentFloor.bounds);
            this.imageMap.remove();
            this.imageMap = L.imageOverlay(this.currentFloor.imagePath, bounds);
            this.imageMap.addTo(this.map);
            this.map.fitBounds(bounds);
            this.setMarkByList(this.currentFloor.coordinates);
        }
    }

    changedMap(map) {
        this.map = map;
        this.map.on('click', (e) => { this.setMarkByEvent(e) });
        setTimeout(() => {
            this.barLevelStartIndex.next(0);
        }, 0);
        this.updateExternalEnv();
    }

    changedMapLayer(mapLayer) {
        this.mapLayer = mapLayer;
    }

    changedImageMap(imageMap) {
        this.imageMap = imageMap;
    }

    private setMarkByEvent(e) {
        if (this.currentMark) {
            const position = e.latlng;
            const icon = new Icon(this.currentTool.name, this.currentTool.size);
            this.currentFloor.coordinates.push(new Coordinate(position, icon));
            this.construtionService.updateFloor(this.currentFloor);
            this.createMarker(position, this.currentMark);
        }
    }

    private setMarkByList(coordinates: Array<Coordinate>) {
        coordinates.forEach((coordinate, index, array) => {
            const mark = L.icon({
                iconUrl: `assets/maps/markers/${coordinate.icon.name}.png`,
                iconSize: coordinate.icon.size,
            });
            this.createMarker(coordinate.position, mark);
        });
    }

    private createMarker(position: [number, number], mark: any) {
        const marker = L.marker(position, { icon: mark, draggable: true, pane: 'markerPane' });
        marker.bindPopup(`<a onclick="window.angularComponent.removeMark('${position.toString()}')">Remover</a>`);
        this.mapLayer.addLayer(marker);
        marker.on('move', (event: any) => { 
            this.currentPosition = { old: event.oldLatLng, new: event.latlng };
        });
        marker.on('moveend', () => { this.updateMark() });
        this.updateExternalEnv();
    }

    private updateMark() {
        const index = this.currentFloor.coordinates.findIndex(coordinate => coordinate.position === this.currentPosition.old);
        if (index > -1) {
            this.currentFloor.coordinates[index].position = this.currentPosition.new;
            this.updateExternalEnv();
        }
    }

    removeMark(value: string) {
        console.log('coor', window['angularComponent']);
        let app = window['angularComponent'];
        const position = value.replace('LatLng(','').replace(')', '').split(', ');
        const marker = L.marker([Number(position[0]), Number(position[1])]);
        app.mapLayer.removeLayer(marker);
        console.log('removeMark', position);
    }

    private updateExternalEnv() {
        window['angularComponent'] = { removeMark: this.removeMark, mapLayer: this.mapLayer, currentFloor: this.currentFloor, zone: this._ngZone};
    }
}