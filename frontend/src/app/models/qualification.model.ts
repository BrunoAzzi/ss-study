import { Worker } from './worker.model';
export class Qualification {
    dueDate: Date;
    attachment: any
    validityStart: Date;
    periodicity: number;
    isApt: boolean;
    overdue: boolean;
    name: string;

    constructor() {
        this.isApt = true;
        this.dueDate = null;
        this.periodicity = 0;
        this.attachment = null;
        this.validityStart = null;
    }

    public initializeWithJSON(json: any, parentConstruction: Worker) {

    }

    public toJSON() {
        return {

        };
    }


}

