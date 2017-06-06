import { Coordinate } from './../../models/coordinate.model';
import { Floor } from './../../models/floor.model';
import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

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

    constructor() { }

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
        }, 0)
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
            this.currentFloor.coordinates.push(new Coordinate(position, this.currentTool.name));
            this.createMarker(position, this.currentMark);
        }
    }

    private setMarkByList(coordinates: Array<Coordinate>) {
        coordinates.forEach((coordinate, index, array) => {
            const mark = L.icon({
                iconUrl: `assets/maps/markers/${coordinate.iconName}.png`,
                iconSize: this.currentTool.size,
            });
            this.createMarker(coordinate.position, mark);
        });
    }

    private createMarker(position: [number, number], mark: any) {
        const marker = L.marker(position, { icon: mark, draggable: true, pane: 'markerPane' });
        this.mapLayer.addLayer(marker);
        marker.on('move', (event: any) => { 
            this.currentPosition = { old: event.oldLatLng, new: event.latlng };
        });
        marker.on('moveend', () => { this.updateMark() });
    }

    private updateMark() {
        const index = this.currentFloor.coordinates.findIndex(coordinate => coordinate.position === this.currentPosition.old);
        if (index > -1) {
            this.currentFloor.coordinates[index].position = this.currentPosition.new;
        }
    }
}