import { Sector } from './sector.model'

export interface IConstruction {
    id: number
    status: string
    image: string
    title: string
    address: string
    sponsor: string
    sectors: Array<Sector>
}

export class Construction implements IConstruction {
    id: number

    status: string
    image: string
    title: string

    description: string

    address: string
    sponsor: string

    sectors: Array<Sector>

    constructor(data: IConstruction) {
        this.id = data.id
		this.status = data.status
		this.image = data.image
		this.title = data.title
		this.address = data.address
		this.sponsor = data.sponsor
        this.sectors = data.sectors ? data.sectors.map(sector => new Sector(sector, this)) : []
    }
}
