import { Sector } from './sector.model'

export interface IConstruction {
    id: number
    status: string
    image: string
    title: string
    sponsor: string
    address: string
    number: string
    complement: string
    cep: string
    sectors: Array<Sector>
}

export class Construction implements IConstruction {
    id: number

    name: string = "";
    cei: string = "";
    logo: any;
    featured: any;

    status: string = "";
    image: string = "";
    title: string = "";

    description: string = ""

    address: string = ""
    cep: string = ""
    city: string = ""
    number: string = ""
    complement: string = ""

    sponsor: string = ""
    sectors: Array<Sector> = []


    public setConstruction(data: IConstruction) {
        this.id = data.id
        this.status = data.status
        this.image = data.image
        this.title = data.title
        this.address = data.address
        this.sponsor = data.sponsor
        this.cep = data.cep
        this.sectors = data.sectors ? data.sectors.map(sector => new Sector(sector, this)) : []
    }

    public toJson() {
        return JSON.stringify(this);
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
