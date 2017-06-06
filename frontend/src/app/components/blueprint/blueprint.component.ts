import { Floor } from './../../models/floor.model';
import { element } from 'protractor';
import { Component, AfterContentChecked, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements AfterContentChecked {

    @Input() mapType: string;

    private map: any;
    private mapLayer: L.LayerGroup;
    private currentMark: any;
    private currentFloor: Floor;
    private lastMap: any;
    private imageMap: any;
    private position: any;
    private firstTime = true;

    constructor() {
        this.mapLayer = new L.LayerGroup([]);
    }

    ngAfterContentChecked(): void {
        const element = document.getElementById(`sheet${this.mapType}`);

        if (this.firstTime && element !== null && element !== undefined) {
            this.firstTime = false;
            const self = this;

            this.map = L.map(`sheet${this.mapType}`, {
                crs: L.CRS.Simple,
                maxZoom: 3
            });

            const bounds = new L.LatLngBounds([0, 0], [413, 186]);
            this.imageMap = L.imageOverlay('', bounds);
            this.imageMap.addTo(this.map);
            this.map.fitBounds(bounds);

            this.mapLayer.addTo(this.map);

            this.map.on('click', function(e) {
                if (self.currentMark) {
                    self.position = { old: null, new: e.latlng };
                    const marker = L.marker(e.latlng, {icon: self.currentMark, draggable: true, pane: 'markerPane'});
                    self.mapLayer.addLayer(marker);
                }
            } );
        }
    }

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

}