import { Injectable } from '@angular/core';
import { Floor } from './../models/floor.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConstructionService {

    private subject: BehaviorSubject<any>;

    public constructionObject: any;

    constructor() {

        this.constructionObject = {
            floors: [
                new Floor('5', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
                new Floor('4', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
                new Floor('3', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
                new Floor('2', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
                new Floor('1', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg'),
                new Floor('T', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
                new Floor('SS', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg')
            ]
        }

        this.subject = new BehaviorSubject(this.constructionObject);
    }

    getConstruction() {
        return this.subject;
    }

    updateFloor(floor: Floor) {
        this.constructionObject.floors = this.constructionObject.floors.map(f => {
            if (f.name === floor.name) {
                return floor
            }
            return f
        })
        this.subject.next(this.constructionObject)
    }

}
