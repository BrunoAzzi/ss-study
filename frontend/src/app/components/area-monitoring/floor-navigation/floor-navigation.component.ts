import { Floor } from './../../../models/floor.model';
import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { ConstructionService } from './../../../services/construction.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'floor-navigation',
    templateUrl: 'floor-navigation.component.html',
    styleUrls: ['floor-navigation.component.scss']
})

export class FloorNavigationComponent implements OnInit {
    @Output() change: EventEmitter<any> = new EventEmitter();

    private selectedFloor: Floor = null;
    private toggleableSections: Array<any>;

    constructor(private service: ConstructionService) {}

    ngOnInit() {
        this.toggleableSections = this.toggleableSections || this.getSections().map(sectionName => ({ name: sectionName, hidden: false }))
    }

    getFloors() {
        return this.service.constructionObject.floors
    }

    onUpdateConstruction(construction) {
        this.service.constructionObject.floors = construction.floors;
    }

    isSectionHidden(sectionName) {
        return this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName)).hidden
    }

    toggleSection(sectionName) {
        let section = this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName))
    }

    getSections() {
        return this.service.constructionObject.floors.reduce((sections, floor) => { 
            if (sections.indexOf(floor.sectionName) < 0) sections.push(floor.sectionName)
            return sections
        }, [])
    }

    summaryBySection(sectionName) {
        return this.service.constructionObject.floors.filter(floor => floor.sectionName === sectionName).reduce((sum, floor) => {
            return {
                alerts: sum.alerts + floor.alertsNumber(),
                cones: sum.cones + floor.conesNumber(),
                workers: sum.workers + floor.workersNumber()
            }
        }, {
            alerts: 0,
            cones: 0,
            workers: 0
        })
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