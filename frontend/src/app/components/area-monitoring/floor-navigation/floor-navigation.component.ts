import { Floor } from './../../../models/floor.model';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'floor-navigation',
    templateUrl: 'floor-navigation.component.html',
    styleUrls: ['floor-navigation.component.scss']
})

export class FloorNavigationComponent {
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

        this.floors = this.floors.map((floor) => {
            floor.sectionName = "Torre 2";
            return floor;
        })
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