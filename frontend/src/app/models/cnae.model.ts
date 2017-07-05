export class Cnae {
    id: number;
    code: string;
    description: string;

    // constructor()
    // constructor(_id: number, _code: string, _description: string) {
    //     this.id = _id;
    //     this.code = _code;
    //     this.description = _description;
    // }

    initializeWithJson(json: any) {
        this.id = json.id;
        this.code = json.code;
        this.description = json.description;
        return this
    }
}
