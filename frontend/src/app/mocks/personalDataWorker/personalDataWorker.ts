import { CBO } from "./../CBO/CBO";

export class PersonalDataWorker {
    name: string;
    cpf: string;
    sex: string;
    scholarity: string;
    nit: string;
    cep: string;
    completeAddress: string;
    complement: string;
    contact: string;
    labor: string;
    function: string;
    specialNecessity: string;
    status: string;
    hiredType: string;
    company: string;
    photoPath: string;
    admissionDate: Date;
    birthDate: Date;
    cbo: CBO;
    ctps: number;
    age: number;

    constructor() {
        this.admissionDate = null;
        this.birthDate = null;
        this.cbo = { code: "", role: "" };
        this.ctps = 0;
        this.age = 0;
        this.name = "";
        this.cpf = "";
        this.sex = "";
        this.scholarity = "";
        this.nit = "";
        this.cep = "";
        this.completeAddress = "";
        this.complement = "";
        this.contact = "";
        this.labor = "";
        this.function = "";
        this.specialNecessity = "";
        this.status = "";
        this.hiredType = "";
        this.company = "";
        this.photoPath = "";
    }
}
