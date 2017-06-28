import { Construction } from './construction.model';
import { Floor } from './floor.model';

export class Sector {

    id: number
    name: string
    acronym: string
    construction: Construction
    floors: Array<Floor>

    constructor(data: any, parentConstruction: Construction) {
        this.id = data.id
        this.name = data.name
        this.acronym = data.acronym
        this.construction = parentConstruction
        this.floors = data.floors.map(f => new Floor(f, this)) || []
    }

    getSummary() {
        return this.floors.reduce((sum, floor) => {
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
}
