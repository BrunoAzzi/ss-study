import { Worker } from './worker.model';
import * as moment from 'moment';

export class Qualification {
    dueDate: Date;
    attachment: any;
    realizationDate: Object;
    periodicity: number;
    able: boolean;
    overdue: boolean;
    name: string;
    recycling: boolean;


    public initializeWithJSON(json: any) {

       // const constRealizationDate     = moment(json.realizationDate, 'YYYY-MM-DD HH:mm:ss');

        this.able         = json.able;
        this.dueDate       = json.realizationDate;
        this.periodicity   = json.periodicity;
        this.attachment    = json.attachment;
    //    this.realizationDate = { date: { year: constRealizationDate.year(), month: constRealizationDate.month() + 1, day: constRealizationDate.date() } }; 
        this.recycling     = json.recycling;
        this.name          = json.quality;
    }

    public toJSON() {
        return {
            dueDate:       this.dueDate,
            attachment:    this.attachment,
            validityStart: this.realizationDate,
            periodicity:   this.periodicity,
            isApt:         this.able,
            overdue:       this.overdue,
            name:          this.name
        };
    }
}

