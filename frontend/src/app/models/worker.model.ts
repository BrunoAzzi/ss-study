import { Health } from './health.model';
import { Security } from './security.modal';
import { Qualification } from './qualification.model';
export class Worker {

    id: number;
    name: string;
    cpf: string;
    gender: string;
    scholarity: string;
    nit: string;
    cep: string;
    completeAddress: string;
    complement: string;
    contact: string;
    cbo: string;
    laborCBO: string;
    cboDescription: string;
    specialNecessity: boolean;
    status: string;
    ownContracting: string;
    company: string;
    photoPath: string;
    admissionDate: Object;
    birthDate: Object;
    ctps: number;
    age: number;
    ocupation: string;
    isThirdparty: boolean = false;
    thirdpartyName: string;

    qualifications: Array<Qualification> = [];
    health: Health = new Health();
    security: Security = new Security();

    constructor()
    constructor(data?: any) {

        let adate_aux = data && new Date(data.admissionDate) || null;
        if (adate_aux != null) {
            this.admissionDate = { date: { year: adate_aux.getFullYear(), month: adate_aux.getMonth() + 1, day: adate_aux.getDate() } }
        }

        let bdate_aux = data && new Date(data.birthDate) || null;
        if (bdate_aux != null) {
            this.birthDate = { date: { year: bdate_aux.getFullYear(), month: bdate_aux.getMonth() + 1, day: bdate_aux.getDate() } }
        }

        let sex = data && data.sexOption || "m";
        this.gender = (sex === "m") ? "Masculino" : "Feminino";

        let hyred = data && data.ownContracting || "";
        this.ownContracting = (hyred === "Terceiro") ? "Terceiro" : "Próprio";

        this.ctps = data && data.ctps || 0;
        this.age = data && data.age || 0;
        this.name = data && data.name || "";
        this.cpf = data && data.cpf || "";
        this.scholarity = data && data.scholarity || "";
        this.nit = data && data.nit || "";
        this.cep = data && data.cep || "";
        this.completeAddress = data && data.completeAddress || "";
        this.complement = data && data.complement || "";
        this.contact = data && data.contact || "";
        this.cbo = data && data.cbo || "";
        this.laborCBO = data && data.laborCBO || "";
        this.cboDescription = data && data.cboDescription || "";
        this.specialNecessity = data && data.specialNecessity || false;
        this.status = data && data.status || "";
        this.company = data && data.company || "";
        this.photoPath = data && data.photoPath || "";
        this.ocupation = data && data.ocupation || undefined
        this.isThirdparty = data && data.isThirdparty || false;
        this.thirdpartyName = data && data.thirdpartyName || undefined
    }

    public initializeWithJSON(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.cpf = json.cpf;
        this.gender = json.gender;
        this.scholarity = json.scholarity;
        this.nit = json.nit;
        this.cep = json.cep;
        this.completeAddress = json.completeAddress;
        this.complement = json.complement;
        this.contact = json.contact;
        this.cbo = json.cbo;
        this.laborCBO = json.laborCBO;
        this.cboDescription = json.cboDescription;
        this.specialNecessity = json.specialNecessity;
        this.status = json.status;
        this.ownContracting = json.ownContracting;
        this.company = json.company;
        this.photoPath = json.photoPath;
        this.admissionDate = json.admissionDate;
        this.birthDate = json.birthDate;
        this.ctps = json.ctps;
        this.age = json.age;
        this.ocupation = json.ocupation;
        this.isThirdparty = json.isThirdparty;
        this.thirdpartyName = json.thirdpartyName;

        if (json.health) {
            this.health = new Health().initializeWithJSON(json.health);
        }

        if (json.qualifications) {
            this.qualifications = json.qualification.map(jsonQualidication => new Qualification().initializeWithJSON(jsonQualidication, this));
        }

        if (json.security) {
            this.security = new Security().initializeWithJSON(json.security);
        }
        return this;
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            cpf: this.cpf,
            gender: this.gender,
            scholarity: this.scholarity,
            nit: this.nit,
            cep: this.cep,
            completeAddress: this.completeAddress,
            complement: this.complement,
            contact: this.contact,
            cbo: this.cbo,
            laborCBO: this.laborCBO,
            cboDescription: this.cboDescription,
            specialNecessity: this.specialNecessity,
            status: this.status,
            ownContracting: this.ownContracting,
            company: this.company,
            photoPath: this.photoPath,
            admissionDate: this.admissionDate,
            birthDate: this.birthDate,
            ctps: this.ctps,
            age: this.age,
            ocupation: this.ocupation,
            isThirdparty: this.isThirdparty,
            thirdpartyName: this.thirdpartyName,
            qualification: this.qualifications.map(qualifications => qualifications.toJSON()),
            security: this.security.toJSON(),
            health : this.health.toJSON()
        };
    }
}
