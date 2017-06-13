export class WorkersData {
    name: string;
    cpf: string;
    sex: string;
    scholarity: string;
    nit: string;
    cep: string;
    completeAddress: string;
    complement: string;
    contact: string;
    cbo: string;
    laborCBO: string;
    laborDescription: string;
    specialNecessity: boolean;
    status: string;
    ownContracting: boolean;
    company: string;
    photoPath: string;
    admissionDate: Date;
    birthDate: Date;
    ctps: number;
    age: number;


    //cbo

    constructor() {
        this.admissionDate = null;
        this.birthDate = null;
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
        this.cbo = "";
        this.laborCBO = "";
        this.laborDescription = "";
        this.specialNecessity = false;
        this.status = "";
        this.ownContracting = true;
        this.company = "";
        this.photoPath = "";
    }
}
