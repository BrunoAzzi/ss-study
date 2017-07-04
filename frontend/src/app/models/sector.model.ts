import { Construction } from './construction.model';
import { Floor } from './floor.model';

export class Sector {

    id: number;
    name: string;
    acronym: string;
    construction: Construction;
    floors: Array<Floor> = [];

    initializeWithJSON(json: any, parentConstruction: Construction) {
        this.id = json.id;
        this.name = json.name;
        this.acronym = json.acronym;
        this.construction = parentConstruction;
        this.floors = json.floors.map(f => new Floor().initWithJSON(f, this)) || [];
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            floors: this.floors.map(floor => floor.toJSON())
        };
    }

    getSummary() {
        return this.floors.reduce((sum, floor) => {
            return {
                alerts: sum.alerts + floor.alertsNumber(),
                cones: sum.cones + floor.conesNumber(),
                workers: sum.workers + floor.workersNumber()
            };
        }, {
            alerts: 0,
            cones: 0,
            workers: 0
        });
    }
}
