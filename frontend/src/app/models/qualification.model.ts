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

    constructor() {
        this.isApt         = true;
        this.dueDate       = null;
        this.periodicity   = 0;
        this.attachment    = null;
        this.validityStart = null;
    }

    public initializeWithJSON(json: any, parentConstruction: Worker) {
        this.isApt         = json.isApt;
        this.dueDate       = json.dueDate;
        this.periodicity   = json.periodicity;
        this.attachment    = json.attachment;
        this.validityStart = json.validityStart;
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

