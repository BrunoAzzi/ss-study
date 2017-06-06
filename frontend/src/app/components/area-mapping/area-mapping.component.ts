import { Floor } from './../../models/floor.model';
import { Component } from '@angular/core';

@Component({
    selector: 'area-mapping',
    templateUrl: 'area-mapping.component.html',
    styleUrls: ['area-mapping.component.scss']
})

export class AreaMappingComponent {

    private map: any;
    private mapLayer: L.LayerGroup;
    private imageMap: any;

    private currentMark: any;
    private currentFloor: Floor;

    constructor() {}

    toolChanged(e) {
        const tool = e.tool;
        if (tool !== null && tool.name.length > 0) {
            this.currentMark = L.icon({
                iconUrl: `assets/maps/markers/${tool.name}.png`,
                iconSize: tool.size,
            });
        } else {
            this.currentMark = null;
        }
    }

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
                const marker = L.marker(e.latlng, {icon: this.currentMark, draggable: true, pane: 'markerPane'});
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