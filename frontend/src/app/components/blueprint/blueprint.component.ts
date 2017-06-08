import { Component, AfterContentChecked, Input, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements AfterContentChecked {

    @Input() mapType: string;

    @Output() changeMap: EventEmitter<any> = new EventEmitter();
    @Output() changeMapLayer: EventEmitter<any> = new EventEmitter();
    @Output() changeImageMap: EventEmitter<any> = new EventEmitter();

    private map: any;
    private mapLayer: L.LayerGroup;
    private imageMap: any;
    private firstTime = true;

    constructor() { }

    ngAfterContentChecked(): void {
        const element = document.getElementById(`sheet${this.mapType}`);
        if (this.firstTime && element !== null && element !== undefined) {
            this.firstTime = false;

            this.map = L.map(`sheet${this.mapType}`, {
                crs: L.CRS.Simple,
                maxZoom: 3
            });

            const bounds = new L.LatLngBounds([0, 0], [413, 186]);
            this.imageMap = L.imageOverlay('', bounds);
            this.imageMap.addTo(this.map);
            this.map.fitBounds(bounds);

            this.mapLayer = new L.LayerGroup([]);
            this.mapLayer.addTo(this.map);

            this.changeImageMap.next(this.imageMap);
            this.changeMapLayer.next(this.mapLayer);
            this.changeMap.next(this.map);
        }
    }

}
