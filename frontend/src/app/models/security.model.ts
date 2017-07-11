import * as moment from 'moment';

export class Security {
    cipeiro: boolean;
    brigade: boolean;
    laborsInCipa: string;
    dataRang: any;

    constructor() { }

    public initializeWithJSON(json: any) {

        const beginDate = moment(json.mandateBegin, 'YYYY-MM-DD HH:mm:ss');
        const endDate   = moment(json.mandateEnd, 'YYYY-MM-DD HH:mm:ss');

        this.cipeiro      = json.cipeiro;
        this.brigade      = json.brigade;
        this.laborsInCipa = json.laborCipa;
        this.dataRang     = {
            beginDate: { date: { year: beginDate.year(), month: beginDate.month() + 1, day: beginDate.date() } },
            endDate:   { date: { year: endDate.year(), month: endDate.month() + 1, day: beginDate.date() } }
        };

        return this;
    }

    public toJSON() {

        return {
            cipeiro:      this.cipeiro,
            brigade:      this.brigade,
            laborsCipa:   this.laborsInCipa,
            mandateBegin: this.dataRang.beginDate,
            mandateEnd:   this.dataRang.endDate,
        };
    }
}