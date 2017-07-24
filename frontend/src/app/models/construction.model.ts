import { Sector } from './sector.model';
import {ResponsibleEngineer} from './responsible-engineer';
import {ResponsibleSafety} from './responsible-safety';

export interface IConstruction {
    id: number;
    status: number;
    image: string;
    name: string;
    sponsor: string;
    address: string;
    number: string;
    complement: string;
    cep: string;
    sectors: Array<Sector>;
}

const statuses = {
    0: 'IN_PROGRESS',
    1: 'PAUSED',
    2: 'FINISHED'
};

export class Construction implements IConstruction {
    id: number;

    name = '';
    cei = '';
    logo: any;
    featured: any;

    status = 0;
    image = '';
    imageFile: File;

    description = '';

    address = '';
    cep = '';
    city = '';
    number = '';
    complement = '';

    responsibleEngineer: ResponsibleEngineer = new ResponsibleEngineer();
    responsibleSafety: ResponsibleSafety = new ResponsibleEngineer();

    sponsor = '';
    sectors: Array<Sector> = [];

    static getStatus(value: number) {
        return statuses[value];
    }

    public getStatus() {
        return Construction.getStatus(this.status);
    }

    public setConstruction(data: IConstruction) {
        this.id = data.id;
        this.status = 0;
        this.image = data.image;
        this.name = data.name;
        this.address = data.address;
        this.sponsor = data.sponsor;
        this.cep = data.cep;
        this.sectors = data.sectors ? data.sectors.map(sector => new Sector().initializeWithJSON(sector, this)) : [];
    }

    public initializeWithJSON(json: any): Construction {
        this.id = json.id;
        this.name = json.name;
        this.cep = json.cep;
        this.address = json.addressStreet;
        this.number = json.addressNumber;
        this.complement = json.addressComplement;
        this.city = json.city;
        this.status = json.status;
        this.description = json.description;
        this.image = json.logoUrl;
        this.cei = json.ceiCode;

        if (json.responsibleEngineer) {
            this.responsibleEngineer = new ResponsibleEngineer().initializeWithJSON(json.responsibleEngineer);
        }
        if (json.responsibleSafety) {
            this.responsibleSafety = new ResponsibleSafety().initializeWithJSON(json.responsibleSafety);
        }
        this.sectors = json.sectors.map(jsonSector => new Sector().initializeWithJSON(jsonSector, this));

        // TODO
        // logoFileName -> json.logoFileName
        // ceiFileName -> json.ceiFileName

        return this;
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            cep: this.cep,
            city: this.city,
            addressStreet: this.address,
            addressNumber: this.number,
            addressComplement: this.complement,
            status: this.status,
            description: this.description,
            ceiCode: this.cei,
            responsibleEngineer: this.responsibleEngineer.toJSON(),
            responsibleSafety: this.responsibleSafety.toJSON(),
            sectors: this.sectors.map(sector => sector.toJSON())
        };
    }

    getSummary() {
        return this.sectors.reduce((sum, sector) => {
            return {
                alerts: sum.alerts + sector.getSummary().alerts,
                cones: sum.cones + sector.getSummary().cones,
                workers: sum.workers + sector.getSummary().workers,
            };
        }, {
            alerts: 0,
            cones: 0,
            workers: 0
        });
    }
}
