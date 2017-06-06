import { Floor } from './../../models/floor.model';
import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bar-level',
    templateUrl: 'bar-level.component.html',
    styleUrls: ['bar-level.component.scss']
})

export class BarLevelComponent implements OnChanges {
    
    @Input() startIndex: number;
    @Output() change: EventEmitter<any> = new EventEmitter();

    private floors: Array<Floor>;
    private selectedFloor: Floor = null;

    constructor() {
        this.floors = [
            new Floor('5', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('4', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('3', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('2', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('1', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('T', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('SS', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg')
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.startIndex.previousValue !== undefined) {
            this.changeFloor(this.floors[changes.startIndex.currentValue]);
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