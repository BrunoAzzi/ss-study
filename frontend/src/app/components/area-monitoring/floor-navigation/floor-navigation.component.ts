import { Floor } from './../../../models/floor.model';
import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { ConstructionService } from './../../../services/construction.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'floor-navigation',
    templateUrl: 'floor-navigation.component.html',
    styleUrls: ['floor-navigation.component.scss']
})

export class FloorNavigationComponent implements OnInit, OnDestroy {
    @Output() change: EventEmitter<any> = new EventEmitter();

    private floors: Array<Floor>;
    private selectedFloor: Floor = null;

    private toggleableSections: Array<any>;
    private constructionSubscription: BehaviorSubject<any>;

    constructor(private constructionService: ConstructionService) {
        this.constructionSubscription = constructionService.getConstruction();
    }

    ngOnInit() {
        this.constructionSubscription.subscribe(this.onUpdateConstruction.bind(this));
    }

    ngOnDestroy() {
        this.constructionSubscription.unsubscribe();
    }

    onUpdateConstruction(construction) {
        this.floors = construction.floors
        this.floors = this.floors.map((floor) => {
            floor.sectionName = "Torre 2";
            return floor;
        })
        this.toggleableSections = this.toggleableSections || this.getSections().map(sectionName => ({ name: sectionName, hidden: true }))
    }

    isSectionHidden(sectionName) {
        return this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName)).hidden
    }

    toggleSection(sectionName) {
        let section = this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName))
        section.hidden = !section.hidden
    }

    getSections() {
        return this.floors.reduce((sections, floor) => { 
            if (sections.indexOf(floor.sectionName) < 0) sections.push(floor.sectionName)
            return sections
        }, [])
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