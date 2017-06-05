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
    private currentMark: any;
    private coordinates: any = {};
    private currentFloor: string;
    private lastMap: any;
    private imageMap: any;
    private position: any;
    private floors: Array<any>;
    private firstTime: boolean = true;
    
    constructor() {
        
        this.floors = [
            { name: '5', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/piso.svg' },
            { name: '4', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/piso.svg' },
            { name: '3', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/piso.svg' },
            { name: '2', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/piso.svg' },
            { name: '1', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/piso.svg' },
            { name: 'T', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/terreo.svg' },
            { name: 'SS', bounds: new L.LatLngBounds([0, 0], [413, 186]), image: 'assets/maps/subsolo.svg' },
        ]
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

            this.setFloor(this.floors[0]);

            this.map.on('click', function(e) {
                if (self.currentMark) {
                    self.position = { old: null, new: e.latlng };
                    let marker = L.marker(e.latlng, {icon: self.currentMark, draggable: true, pane: 'markerPane'});
                    self.setMarker(self, marker);
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

    isSelectedFloor(floor: string) {
        return floor === this.currentFloor;
    }

    setFloor(floor: any) {
        this.cleanupAllMarkersByFloor(this.currentFloor);
        this.currentFloor = floor.name;
        const overlay = floor;
        this.imageMap.remove();
        this.imageMap = L.imageOverlay(overlay.image, overlay.bounds);
        this.imageMap.addTo(this.map);
        this.map.fitBounds(overlay.bounds);

        if (!(floor.name in this.coordinates)) {
            this.coordinates[floor.name] = {};
        } else {
            const markers = this.coordinates[floor.name];
            if (Object.keys(markers).length > 0) {
                for (const mark in markers) {
                    if (markers.hasOwnProperty(mark)) {
                        this.setMarker(this, markers[mark]);
                    }
                }
            }
        }
    }

    setMarker(obj: any, marker: any) {
        marker.addTo(obj.map);
        obj.coordinates[obj.currentFloor][obj.position.new] = marker;
        marker.on('move', function(e) {
            obj.position = { old: e.oldLatLng, new: e.latlng };
        } );
        marker.on('moveend', function() {
            obj.coordinates[obj.currentFloor][obj.position.new] = obj.coordinates[obj.currentFloor][obj.position.old];
            delete obj.coordinates[obj.currentFloor][obj.position.old];
        } );
    }

    cleanupAllMarkersByFloor(floor: string) {
        if (floor !== '' && (floor in this.coordinates)) {
            const markers = this.coordinates[floor];
            if (Object.keys(markers).length > 0) {
                for (const mark in markers) {
                    if (markers.hasOwnProperty(mark)) {
                        const element = markers[mark];
                        element.off('click');
                        element.off('move');
                        element.off('moveend');
                        element.remove();
                    }
                }
            }
        }
    }

}