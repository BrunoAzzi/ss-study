import { Injectable } from '@angular/core';
import { Floor } from './../models/floor.model';

@Injectable()
export class ConstructionService {

    private floors: Array<Floor> = []

    constructor() { 
        this.floors = [
            new Floor('5', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('4', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('3', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('2', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('1', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg'),
            new Floor('T', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('SS', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg')
        ]
    }

    getConstruction() {
        return {
            floors: this.floors
        }
    }

}
