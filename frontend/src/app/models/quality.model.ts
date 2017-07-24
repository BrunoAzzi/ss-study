export class Quality {
    id: number;
    name: string;

    constructor() { }

    public initializeWithJSON(json: any) {
        this.id    = json.id;
        this.name  = json.name;
        return this;
    }

    public toJSON() {
        return {
            id:    this.id,
            name:  this.name
        };
    }
}