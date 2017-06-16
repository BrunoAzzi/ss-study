import { Construction } from './../../models/construction.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Input, OnChanges, OnInit } from '@angular/core';
import { Floor } from './../../models/floor.model';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'area-monitoring',
    templateUrl: 'area-monitoring.component.html',
    styleUrls: ['area-monitoring.component.scss']
})

export class AreaMonitoringComponent implements OnInit {

    @Input() construction: Construction;

    public activeFilters : Array<any> = [];
    public currentFloor : Floor;

    constructor() {}

    ngOnInit() {
        this.currentFloor = this.currentFloor || this.construction.floors[0]
    }

    onFloorChanged(floor : Floor) {
        this.currentFloor = floor
    }

    onFilterChanged(filters) {
        this.activeFilters = filters
    }
}