import * as moment from 'moment';

export class Security {
    cipeiro: boolean;
    brigade: boolean;
    laborsInCipa: string;
    dataRang: any;

    constructor() {
        this.cipeiro      = null;
        this.brigade      = null;
        this.laborsInCipa = null;
        this.dataRang     = null;
    }

    public initializeWithJSON(json: any) {

        const beginDate = moment(json.mandate_begin_date, 'YYYY-MM-DD HH:mm:ss');
        const endDate   = moment(json.mandate_end_date, 'YYYY-MM-DD HH:mm:ss');

        this.cipeiro      = json.cipeiro;
        this.brigade      = json.brigade;
        this.laborsInCipa = json.laborsInCipa;
        this.dataRang     = {
            beginDate: { date: { year: beginDate.year(), month: beginDate.month() + 1, day: beginDate.date() } },
            endDate:   { date: { year: endDate.year(), month: endDate.month() + 1, day: beginDate.date() } }
        };
        return this;
    }

    public toJSON() {
        return {
            cipeiro:            this.cipeiro,
            brigade:            this.brigade,
            laborsInCipa:       this.laborsInCipa,
            mandate_begin_date: this.dataRang.beginDate,
            mandate_end_date:   this.dataRang.endDate,
        };
    }
}