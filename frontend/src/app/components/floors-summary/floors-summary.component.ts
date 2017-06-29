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
    @Input() mini: Boolean;
    @Output() change: EventEmitter<Floor> = new EventEmitter();

    private selectedFloor: Floor = null;
    private toggleableSections: Array<any>;

    constructor() { }

    ngOnInit() {
        this.toggleableSections = this.toggleableSections || this.construction.sectors.map(sector => ({ name: sector.name, hidden: false }))
        !this.selectedFloor && this.construction.sectors[0] && this.changeFloor(this.construction.sectors[0].floors[0])
    }

    getConstruction() {
        return this.construction
    }

    onUpdateConstruction(construction) {
        this.construction.sectors = construction.sectors;
    }

    isSectionHidden(sectionName) {
        return this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName)).hidden
    }

    toggleSection(sectionName) {
        let section = this.toggleableSections.find(toggleableSection => (toggleableSection.name === sectionName))
        section.hidden = !section.hidden
    }

    summaryBySector(sector) {
        return sector.floors.reduce((sum, floor) => {
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
