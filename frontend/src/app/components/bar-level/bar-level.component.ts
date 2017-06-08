import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { ConstructionService } from './../../services/construction.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Floor } from './../../models/floor.model';

@Component({
    selector: 'bar-level',
    templateUrl: 'bar-level.component.html',
    styleUrls: ['bar-level.component.scss']
})

export class BarLevelComponent implements OnChanges, OnInit, OnDestroy {

    @Input() startIndex: number;
    @Output() change: EventEmitter<any> = new EventEmitter();

    floors: Array<Floor>;
    private selectedFloor: Floor = null;

    private constructionSubscription: BehaviorSubject<any>;

    constructor(private service: ConstructionService) {
        this.constructionSubscription = service.getConstruction();
    }

    ngOnInit() {
        this.constructionSubscription.subscribe(this.onUpdateConstruction.bind(this));
    }

    ngOnDestroy() {
        this.constructionSubscription.unsubscribe();
    }

    onUpdateConstruction(construction) {
        this.floors = construction.floors;
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
