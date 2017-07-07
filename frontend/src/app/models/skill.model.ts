import * as moment from 'moment';


export class Recycling {
    attachment: any;
    dueDate: Date;
    validityStart: Date;
    periodicity: number;
    isApt: boolean;

    constructor() {
        this.isApt = true;
        this.attachment = null;
        this.dueDate = null;
        this.validityStart = null;
        this.periodicity = 0;
    }

/*    public initializeWithJSON(json: any) {

        let beginDate = moment(json.mandate_begin_date, "YYYY-MM-DD HH:mm:ss");
        let endDate   = moment(json.mandate_end_date, "YYYY-MM-DD HH:mm:ss");

        this.cipeiro      = json.is_cipeiro;
        this.brigade      = json.is_brigade;
        this.laborsInCipa = json.laborsInCipa;
        this.dataRang     = {
            beginDate: { date: { year: beginDate.year(), month: beginDate.month() + 1, day: beginDate.date() } },
            endDate:   { date: { year: endDate.year(), month: endDate.month() + 1, day: beginDate.date() } }
        };
        return this;
    }

    public toJSON() {
        return {
            is_cipeiro:         this.cipeiro,
            is_brigade:         this.brigade,
            laborsInCipa:       this.laborsInCipa,
            mandate_begin_date: this.dataRang.beginDate,
            mandate_end_date:   this.dataRang.endDate,
        };
    }*/
}