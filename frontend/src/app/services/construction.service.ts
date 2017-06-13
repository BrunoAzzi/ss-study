import { Observable } from 'rxjs/Observable';
import { ConstructionsService } from './constructions.service';
import { Construction } from './../models/construction.model';
import { Injectable } from '@angular/core';
import { Floor } from './../models/floor.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConstructionService {

    public construction: Construction;

    constructor(private constructionsService : ConstructionsService) {}

    getConstruction(id) {
        this.construction = this.constructionsService.constructions.find((construction) => {
            return construction.id === id;
        })

        let c = this.construction;
        c.setFloors([
            new Floor('5', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('4', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('3', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('2', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('1', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg'),
            new Floor('T', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('SS', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg')
        ])

        let o = Observable.of(c).delay(2000).subscribe((construction) => {
            this.construction = construction;
            o.unsubscribe();
        });
    }

    updateFloor(floor: Floor) {
        this.construction.floors = this.construction.floors.map(f => {
            if (f.name === floor.name) {
                return floor
            }
            return f
        })
    }

}
