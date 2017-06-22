export class Collaborator {
    id: number;
    name: string;
    cpf: string;
    occupation: string;
    selected: boolean;

    constructor(id, name, cpf, occupation) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.occupation = occupation;
        this.selected = false;
    }
}
