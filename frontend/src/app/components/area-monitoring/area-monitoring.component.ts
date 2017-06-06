import { Floor } from './../../models/floor.model';
import { Component } from '@angular/core';

@Component({
    selector: 'area-monitoring',
    templateUrl: 'area-monitoring.component.html',
    styleUrls: ['area-monitoring.component.scss']
})

export class AreaMonitoringComponent {

    private map: any;
    private mapLayer: L.LayerGroup;
    private imageMap: any;

    private floors: Array<Floor>;
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
        }
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