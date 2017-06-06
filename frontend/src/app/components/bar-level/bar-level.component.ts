import { Floor } from './../../models/floor.model';
import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConstructionService } from './../../services/construction.service';

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

    constructor(private constructionService: ConstructionService) {
        this.floors = constructionService.getConstruction().floors;
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