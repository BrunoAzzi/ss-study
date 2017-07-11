import { Health } from './health.model';
import { Qualification } from './qualification.model';
import { Cbo } from './cbo.model';
import { Security } from './security.model';
import * as moment from 'moment';

export class Worker {

    id: number;

    cep: string;
    completeAddress: string;
    complement: string;

    name: string;
    cpf: string;
    gender: boolean;
    scholarity: string;
    nit: string;
    contact: string;
    cbo: Cbo = new Cbo();
    laborCBO: string;
    cboDescription: string;
    specialNeeds: boolean;
    status: string;
    contractType: string;
    company: string;
    photoPath: string;
    admissionDate: Object;
    birthDate: Object;
    ctps: number;
    age: number;
    ocupation: string;
    isThirdparty: boolean;
    thirdpartyName: string;

    qualifications: Array<Qualification> = [];
    health: Health                       = new Health();
    security: Security                   = new Security();

    public initializeWithJSON(json: any) {
        const birthDate     = moment(json.birthDate, 'YYYY-MM-DD HH:mm:ss');
        const admissionDate = moment(json.admissionAt, 'YYYY-MM-DD HH:mm:ss');

        this.id              = json.id;
        this.name            = json.name;
        this.cpf             = json.cpf;
        this.scholarity      = json.degreeId;
        this.nit             = json.nit;
        this.cep             = json.cep;
        this.completeAddress = json.address;
        this.complement      = json.complement;
        this.contact         = json.contact;
        this.laborCBO        = json.laborCBO;
        this.cboDescription  = json.functionDescription;
        this.specialNeeds    = json.specialNeeds;
        this.status          = json.status;
        this.contractType    = json.contractType;
        this.company         = json.company;
        this.photoPath       = json.photoPath;
        this.admissionDate   = { date: { year: admissionDate.year(), month: admissionDate.month() + 1, day: admissionDate.date() } };
        this.birthDate       = { date: { year: birthDate.year(), month: birthDate.month() + 1, day: birthDate.date() } };
        this.ctps            = json.ctps;
        this.age             = birthDate.diff(moment(), 'years');
        this.ocupation       = json.ocupation;
        this.isThirdparty    = json.isThirdparty;
        this.thirdpartyName  = json.thirdpartyName;
        this.gender          = json.gender === 'masculino' ? this.gender = true : this.gender = false;

        if (json.health) {
            this.health = new Health().initializeWithJSON(json.health);
        }

        if (json.qualifications) {
            this.qualifications = json.qualifications.map(jsonQualidication => new Qualification().initializeWithJSON(jsonQualidication, this));
        }


        this.security = new Security().initializeWithJSON(json);
        this.cbo = new Cbo().initializeWithJSON(json);

        return this;
    }

    public toJSON() {
        return {
            id:                  this.id,
            name:                this.name,
            cpf:                 this.cpf,
            gender:              this.gender,
            scholarity:          this.scholarity,
            nit:                 this.nit,
            cep:                 this.cep,
            completeAddress:     this.completeAddress,
            complement:          this.complement,
            contact:             this.contact,

            laborCBO:            this.laborCBO,
            functionDescription: this.cboDescription,
            specialNeeds:        this.specialNeeds,
            status:              this.status,
            contractType:        this.contractType,
            company:             this.company,
            photoPath:           this.photoPath,
            admissionDate:       this.admissionDate,
            birthDate:           this.birthDate,
            ctps:                this.ctps,
            age:                 this.age,
            ocupation:           this.ocupation,
            isThirdparty:        this.isThirdparty,
            thirdpartyName:      this.thirdpartyName,

            qualifications: this.qualifications.map(qualifications => qualifications.toJSON()),
            security:       this.security.toJSON(),
            cbo:            this.cbo.toJSON(),
            health:         this.health.toJSON()
        };
    }
}
