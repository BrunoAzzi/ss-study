import { Sector } from './sector.model'

export interface IConstruction {
    id: number
    status: number
    image: string
    name: string
    sponsor: string
    address: string
    number: string
    complement: string
    cep: string
    sectors: Array<Sector>
}

const statuses = {
    0: 'IN_PROGRESS',
    1: 'PAUSED',
    2: 'FINISHED'
}

export class Construction implements IConstruction {
    id: number

    name = '';
    cei = '';
    logo: any;
    featured: any;

    status = 0;
    image = '';

    description = ''

    address = ''
    cep = ''
    city = ''
    number = ''
    complement = ''

    sponsor = ''
    sectors: Array<Sector> = []

    static getStatus(value: number) {
        return statuses[value]
    }

    public getStatus() {
        return Construction.getStatus(this.status)
    }


    public setConstruction(data: IConstruction) {
        this.id = data.id
        this.status = 0
        this.image = data.image
        this.name = data.name
        this.address = data.address
        this.sponsor = data.sponsor
        this.cep = data.cep
        this.sectors = data.sectors ? data.sectors.map(sector => new Sector(sector, this)) : []
    }

    public initializeWithJSON(json: any): Construction {
        this.id = json.id
        this.name = json.name
        this.cep = json.cep
        this.address = json.addressStreet
        this.number = json.addressNumber
        this.complement = json.addressComplement
        this.city = json.city
        this.status = json.status
        this.description = json.description
        this.image = json.logoUrl
        this.cei = json.ceiCode

        // TODO
        // logoFileName -> json.logoFileName
        // ceiFileName -> json.ceiFileName
        // sectors -> json.sectors
        // responsibleEngineer -> json.responsibleEngineer
        // responsibleSafety -> json.responsibleSafety
        return this;
    }

    public toJson() {
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
            ceiCode: this.cei
        };
    }

    getSummary() {
        return this.sectors.reduce((sum, sector) => {
            return {
                alerts: sum.alerts + sector.getSummary().alerts,
                cones: sum.cones + sector.getSummary().cones,
                workers: sum.workers + sector.getSummary().workers,
            }
        }, {
            alerts: 0,
            cones: 0,
            workers: 0
        })
    }
}
