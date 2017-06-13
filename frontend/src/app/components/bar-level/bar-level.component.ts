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
    @Output() change: EventEmitter<any> = new EventEmitter();

    private selectedFloor: Floor = null;

    constructor(private service: ConstructionsService) {}

    onUpdateConstruction(construction) {
        this.service.construction.floors = construction.floors;
    }

    getFloors() {
        return this.service.construction ? this.service.construction.floors : []
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.startIndex.previousValue !== undefined && this.getFloors().length > 0) {
            this.changeFloor(this.service.construction.floors[changes.startIndex.currentValue]);
        }
    }

    changeFloor(floor: Floor): void {
        this.selectedFloor = floor;
        this.change.next({ floor: floor });
    }

    isSelectedFloor(floorName: string) {
        if (this.selectedFloor !== null) {
            return floorName === this.selectedFloor.name;
        }
        return false;
    }
}
