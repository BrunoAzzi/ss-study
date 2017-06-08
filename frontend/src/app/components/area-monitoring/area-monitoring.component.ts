import { Floor } from './../../models/floor.model';
import { Coordinate } from './../../models/coordinate.model';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'area-monitoring',
    templateUrl: 'area-monitoring.component.html',
    styleUrls: ['area-monitoring.component.scss']
})

export class AreaMonitoringComponent {

    private map: any;
    private mapLayer: L.LayerGroup;
    private imageMap: any;

    private sections: Array<any>;

    private currentMark: any;
    private currentFloor: Floor;

    constructor() {}

    floorChanged(e) {
        this.mapLayer.clearLayers();
        const floor: Floor = e.floor;
        if (floor !== null) {
            const bounds = new L.LatLngBounds(floor.bounds);
            this.imageMap.remove();
            this.imageMap = L.imageOverlay(floor.imagePath, bounds);
            this.imageMap.addTo(this.map);
            this.map.fitBounds(bounds);
            this.setMarkByList(floor.coordinates);
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
        this.mapLayer.addLayer(marker);
    }

    changedMap(map) {
        this.map = map;
        this.map.on('click', (e) => {
            if (this.currentMark) {
                const marker = L.marker(e.latlng, {icon: this.currentMark, draggable: false, pane: 'markerPane'});
                this.mapLayer.addLayer(marker);
            }
        });
    }

    changedMapLayer(mapLayer) {
        this.mapLayer = mapLayer;
    }

    changedImageMap(imageMap) {
        this.imageMap = imageMap;
    }
}