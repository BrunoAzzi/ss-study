import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var L: any;

@Component({
    selector: 'app-blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements OnInit, AfterViewInit {
    map: any;
    currentMark: any;
    coordinates: any = {};
    private currentTool: string;
    private currentFloor: string;
    private lastMap: any;
    private imageMap: any;
    private floors: any;
    private position: any;

    constructor() {
        this.floors = {
            '5': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/piso.svg' },
            '4': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/piso.svg' },
            '3': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/piso.svg' },
            '2': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/piso.svg' },
            '1': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/piso.svg' },
            'T': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/terreo.svg' },
            'SS': { bounds: [[0, 0], [413, 186]], image: 'assets/maps/subsolo.svg' },
        };
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const self = this;

        this.map = L.map('sheet', {
            crs: L.CRS.Simple,
            maxZoom: 3
        });

        const bounds = [[0, 0], [413, 186]];
        this.imageMap = L.imageOverlay('', bounds);
        this.imageMap.addTo(this.map);
        this.map.fitBounds(bounds);

        this.setFloor('T');

        this.map.on('click', function(e) {
            if (self.currentMark) {
                self.position = { old: null, new: e.latlng };
                let marker = L.marker(e.latlng, {icon: self.currentMark, draggable: true, pane: 'markerPane'});
                self.setMarker(self, marker);
            }
        } );
    }

    changeMark(name: string) {
        this.currentMark = null;
        if (this.currentTool === name) {
            this.currentTool = '';
        } else {
            this.currentTool = name;
            if (name.length > 0) {
                this.currentMark = L.icon({
                    iconUrl: `assets/maps/markers/${name}.png`,
                    iconSize: [53, 51],
                });
            }
        }
    }

    isSelectedTool(name: string) {
        return name === this.currentTool;
    }

    isSelectedFloor(floor: string) {
        return floor === this.currentFloor;
    }

    setFloor(floor: string) {
        this.cleanupAllMarkersByFloor(this.currentFloor);
        this.currentFloor = floor;
        const overlay = this.floors[floor];
        this.imageMap.remove();
        this.imageMap = L.imageOverlay(overlay.image, overlay.bounds);
        this.imageMap.addTo(this.map);
        this.map.fitBounds(overlay.bounds);

        if (!(floor in this.coordinates)) {
            this.coordinates[floor] = {};
        } else {
            const markers = this.coordinates[floor];
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
