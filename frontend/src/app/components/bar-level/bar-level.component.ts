import { Construction } from './../../models/construction.model';
import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { ConstructionsService } from './../../services/constructions.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Floor } from './../../models/floor.model';

@Component({
    selector: 'bar-level',
    templateUrl: 'bar-level.component.html',
    styleUrls: ['bar-level.component.scss']
})

export class BarLevelComponent implements OnChanges {

    @Input() startIndex: number;
    @Input() construction: Construction;
    @Output() change: EventEmitter<any> = new EventEmitter();

    private selectedFloor: Floor = null;

    constructor() {}

    onUpdateConstruction(construction) {
        this.construction.floors = construction.floors;
    }

    getFloors() {
        return this.construction ? this.construction.floors : []
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.startIndex.previousValue !== undefined && this.getFloors().length > 0) {
            this.changeFloor(this.construction.floors[changes.startIndex.currentValue]);
        }
    }

    changeFloor(floor: Floor): void {
        this.selectedFloor = floor;
        this.change.next(floor);
    }

    isSelectedFloor(floorName: string) {
        if (this.selectedFloor !== null) {
            return floorName === this.selectedFloor.name;
        }
        return false;
    }
}
