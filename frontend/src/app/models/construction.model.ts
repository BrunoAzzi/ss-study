import { Floor } from './floor.model';

export interface IConstruction {
    id: number;
    status: string;
    image: string;
    title: string;
    address: string;
    sponsor: string;
    floors: Array<Floor>;
}

export class Construction implements IConstruction {
    id: number;

    status: string;
    image: string;
    title: string;

    description: string;

    address: string;
    sponsor: string;

    floors: Array<Floor> = [];

    constructor(data: IConstruction) {
        this.id = data.id;
		this.status = data.status;
		this.image = data.image;
		this.title = data.title;
		this.address = data.address;
		this.sponsor = data.sponsor;
		this.floors = data.floors.map(value => new Floor(value));
    }
}
