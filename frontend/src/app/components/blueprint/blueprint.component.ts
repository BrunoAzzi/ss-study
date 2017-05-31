import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var L: any

@Component({
    selector: 'blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements OnInit, AfterViewInit {
    map: any
    currentMark: any
    private currentTool: string
    private currentFloor: string
    
    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        let self = this;
        this.map = L.map('sheet', {
            crs: L.CRS.Simple
        });

        let bounds = [[0,0], [8, 12]];
        let image1 = L.imageOverlay('assets/maps/layer-large.png', bounds).addTo(this.map);
        this.map.fitBounds(bounds);

        // L.control.scale().addTo(this.map);

        this.map.on('click', function(e) {
            if (self.currentMark) {
                L.marker(e.latlng, {icon: self.currentMark, draggable: true, pane: 'markerPane'}).addTo(self.map);
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
        this.currentFloor = floor;
    }
}