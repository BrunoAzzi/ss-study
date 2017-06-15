import { Floor } from './../../models/floor.model';
import { Construction } from './../../models/construction.model';
import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'floors-summary',
    templateUrl: 'floors-summary.component.html',
    styleUrls: ['floors-summary.component.scss']
})

export class FloorsSummaryComponent implements OnInit {

    @Input() construction: Construction;
    @Output() change: EventEmitter<Floor> = new EventEmitter();

    private selectedFloor: Floor = null;
    private toggleableSections: Array<any>;

    constructor() { }

    ngOnInit() {
        this.toggleableSections = this.toggleableSections || this.getSections().map(sectionName => ({ name: sectionName, hidden: false }))
        !this.selectedFloor && this.changeFloor(this.construction.floors[0])
    }

    getConstruction() {
        return this.construction
    }

    getFloors() {
        return this.getConstruction() ? this.getConstruction().floors : []
    }

    getSections() {
        return this.getFloors().reduce((sections, floor) => {
            if (sections.indexOf(floor.sectionName) < 0) sections.push(floor.sectionName)
            return sections
        }, [])
    }

    onUpdateConstruction(construction) {
        this.construction.floors = construction.floors;
    }

    isSectionHidden(sectionName) {
        return this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName)).hidden
    }

    toggleSection(sectionName) {
        let section = this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName))
        section.hidden = !section.hidden
    }

    summaryBySection(sectionName) {
        return this.construction.floors.filter(floor => floor.sectionName === sectionName).reduce((sum, floor) => {
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
        this.change.next(floor);
    }

    isSelectedFloor(floorName: string) {
        if (this.selectedFloor !== null) {
            return floorName === this.selectedFloor.name;
        }
        return false;
    }
}
