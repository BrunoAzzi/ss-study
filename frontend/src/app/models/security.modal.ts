export class Security {
    cipeiro: string;
    brigade: string;
    laborsInCipa: string;
    dataRang: string;

    public initializeWithJSON(json: any) {
        this.cipeiro      = json.cipeiro;
        this.brigade      = json.brigade;
        this.laborsInCipa = json.laborsInCipa;
        this.dataRang     = json.dataRang;
        return this;
    }

    public toJSON() {
        return {
            cipeiro:      this.cipeiro,
            brigade:      this.brigade,
            laborsInCipa: this.laborsInCipa,
            dataRang:     this.dataRang
        };
    }
}