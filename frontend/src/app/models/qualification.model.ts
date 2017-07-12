import { Worker } from './worker.model';
import * as moment from 'moment';

export class Qualification {
    dueDate: Date;
    attachment: any;
    validityStart: Date;
    periodicity: number;
    isApt: boolean;
    overdue: boolean;
    name: string;
    recycling: boolean;

    constructor() { }

    public initializeWithJSON(json: any) {
        this.isApt         = json.able;
        this.dueDate       = json.realizationDate;
        this.periodicity   = json.periodicity;
        this.attachment    = json.attachment;
        this.validityStart = json.validityStart;
        this.recycling     = json.recycling;
        this.name          = json.quality;
    }

    public toJSON() {
        return {
            dueDate:       this.dueDate,
            attachment:    this.attachment,
            validityStart: this.validityStart,
            periodicity:   this.periodicity,
            isApt:         this.isApt,
            overdue:       this.overdue,
            name:          this.name
        };
    }
}

