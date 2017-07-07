import { Health } from './health.model';
import { Security } from './security.modal';
import { Qualification } from './qualification.model';
import * as moment from 'moment';

export class Worker {

    id: number;
    name: string;
    cpf: string;
    gender: boolean;
    scholarity: string;
    nit: string;
    cep: string;
    completeAddress: string;
    complement: string;
    contact: string;
    cbo: Object;
    laborCBO: string;
    cboDescription: string;
    specialNecessity: boolean;
    status: boolean;
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

    public initializeWithJSON(json: any) {
        let birth_date = moment(json.birth_date,"YYYY-MM-DD HH:mm:ss");
        let admission_date = moment(json.admission_date,"YYYY-MM-DD HH:mm:ss");

        this.id = json.id;
        this.name = json.name;
        this.cpf = json.cpf;
        this.gender = json.gender;
        this.scholarity = "Médio Completo";
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
        this.admissionDate = { date: { year:admission_date.year(), month:admission_date.month()+1, day:admission_date.date() }};
        this.birthDate = { date: { year:birth_date.year(), month:birth_date.month()+1, day:birth_date.date() }};
        this.ctps = json.ctps;
        this.age = birth_date.diff(moment(),'years');
        this.ocupation = json.ocupation;
        this.isThirdparty = json.isThirdparty;
        this.thirdpartyName = json.thirdpartyName;
         
        this.gender = (json.gender === 'Masculino') ? true : false;

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
            gender: (this.gender === true) ? 'Masculino' : 'Feminino',
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
            health: this.health.toJSON()
        };
    }
}
