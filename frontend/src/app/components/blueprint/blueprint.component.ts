import { element } from 'protractor';
import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements OnInit, AfterContentChecked {
    
    private map: any;
    private currentMark: any;
    private coordinates: any = {};
    private currentTool: string;
    private currentFloor: string;
    private lastMap: any;
    private imageMap: any;
    private floors: Array<any>;
    private firstTime: boolean = true;

    @Input() mapType: string;
    
    private tools: Array<any> = [
        { name: 'checkpoint', imageName: 'cone', labelName: 'Check Point' },
        { name: 'cup_holders', imageName: 'cup_holders', labelName: 'Guarda Copos' },
        { name: 'crane', imageName: 'crane', labelName: 'Grua' },
        { name: 'water', imageName: 'water', labelName: 'Água' },
        { name: 'wc', imageName: 'wc', labelName: 'Banheiro' },
        { name: 'er', imageName: 'er', labelName: 'Primeiros Socorros' },
        { name: 'tray', imageName: 'tray', labelName: 'Bandejas' },
        { name: 'extinguisher', imageName: 'extinguisher', labelName: 'Extintor' },
        { name: 'accommodation', imageName: 'accommodation', labelName: 'Alojamento' },
        { name: 'refectory', imageName: 'refectory', labelName: 'Refeitório' },
        { name: 'recreation', imageName: 'recreation', labelName: 'Lazer' },
        { name: 'laundry', imageName: 'laundry', labelName: 'Lavanderia' },
        { name: 'carpentry', imageName: 'carpentry', labelName: 'Carpintaria' },
        { name: 'elevator', imageName: 'elevator', labelName: 'Elevador' },
        { name: 'totem', imageName: 'totem', labelName: 'Totem' },
        { name: 'others', imageName: 'others', labelName: 'Outros' },
    ];
    

    private position: any;

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

    ngOnInit(): void {
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