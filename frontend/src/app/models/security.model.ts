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
        this.cipeiro      = json.cipeiro;
        this.brigade      = json.brigade;
        this.laborsInCipa = json.laborsInCipa;
        this.dataRang     = {
            beginDate: { year: 2018, month: 10, day: 9 },
            endDate:   { year: 2018, month: 10, day: 19 }
        };
        return this;
    }

    public toJSON() {
        return {
            cipeiro:      this.cipeiro,
            brigade:      this.brigade,
            laborsInCipa: this.laborsInCipa,
            mandateBegin: this.dataRang.beginDate,
            mandateEnd:   this.dataRang.endDate,
        };
    }
}