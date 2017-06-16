export class Collaborator {
    id: number;
    name: string;
    cpf: string;
    occupation: string;

    constructor(id, name, cpf, occupation) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.occupation = occupation;
    }
}
