import { Floor } from './floor.model';
import { User } from './user.model';

export interface IOccurrence {
    id: number
    floor: Floor
    type: string
    title: string
    scheduleTo: Date
    isToday(): boolean
}

export class Occurrence implements IOccurrence {
    id: number
    floor: Floor
    type: string
    title: string
    scheduleTo: Date

    public constructor() {}

    public initializeWithJSON(json: any): Occurrence {
        this.id = json.id
        this.scheduleTo = json.scheduleTo
        this.floor = json.floor
        this.title = json.title
        this.type = json.type

        return this
    }

    public toJSON() {
        return {
            id:  this.id,
            scheduleTo: this.scheduleTo,
            floor: this.floor,
            title: this.title,
            type: this.type
        };
    }

    public isToday(): boolean {
        var now = new Date();

        return (this.scheduleTo.getDay() == now.getDay() && 
                this.scheduleTo.getMonth() == now.getMonth() && 
                this.scheduleTo.getFullYear() == now.getFullYear());
    }
}