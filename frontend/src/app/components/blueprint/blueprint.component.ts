import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var L: any

@Component({
    selector: 'blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements OnInit, AfterViewInit {
    map: any

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.map = L.map('sheet', {
            crs: L.CRS.Simple
        });

        let bounds = [[0,0], [8, 12]];
        let image1 = L.imageOverlay('assets/maps/layer-large.png', bounds).addTo(this.map);
        this.map.fitBounds(bounds);

        L.control.scale().addTo(this.map);
    }
}