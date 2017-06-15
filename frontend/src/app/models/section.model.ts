import { Floor } from './floor.model';

export class Section {

    id: number
    name: string
    floors: Array<Floor>

    constructor(data: any) {
        this.id = data.id
        this.name = data.name
        this.floors = data.floors || []
    }
}
