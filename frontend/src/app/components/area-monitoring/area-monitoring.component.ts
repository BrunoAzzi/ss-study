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

    constructor() {

        this.floors = [
            new Floor('5', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('4', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('3', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('2', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('1', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('T', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('SS', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg')
        ];

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