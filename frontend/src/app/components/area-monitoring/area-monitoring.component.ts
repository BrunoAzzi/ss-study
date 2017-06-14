import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ConstructionsService } from './../../services/constructions.service';
import { Floor } from './../../models/floor.model';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'area-monitoring',
    templateUrl: 'area-monitoring.component.html',
    styleUrls: ['area-monitoring.component.scss']
})

export class AreaMonitoringComponent {

    public activeFilters : Array<any> = [];
    public currentFloor : Floor;

    constructor(public service: ConstructionsService) {}

    onFloorChanged(floor : Floor) {
        this.currentFloor = floor
    }

    onFilterChanged(filters) {
        this.activeFilters = filters
    }
}