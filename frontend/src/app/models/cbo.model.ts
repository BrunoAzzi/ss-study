export class Cbo {
    id: number;
    code: string;
    title: string;

    constructor() { }

    public initializeWithJSON(json: any) {
        this.id    = json.id;
        this.code  = json.code;
        this.title = json.title;
        return this;
    }

    public toJSON() {
        return {
            id:    this.id,
            code:  this.code,
            title: this.title
        };
    }
}