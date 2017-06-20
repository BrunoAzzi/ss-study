import { Floor } from './../../../../models/floor.model';
import { ConstructionsService } from './../../../../services/constructions.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'monitoring',
    templateUrl: 'monitoring.component.html',
    styleUrls: ['./monitoring.component.scss']
})

export class MonitoringComponent implements OnInit {

    constructor(public service: ConstructionsService) { }

    ngOnInit() { }

    public onFloorUpdated(floor: Floor) {
        this.service.updateFloor(floor)
    }
}