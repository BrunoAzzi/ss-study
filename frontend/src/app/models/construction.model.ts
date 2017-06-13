import { Floor } from './floor.model';

export class Construction {

    id: number;

    status: string;
    image: string;
    title: string;
    
    description: string;

    address: string;
    sponsor: string;

    floors: Array<Floor>;

    constructor(
        id: number,
        status: string,
        image: string,
        title: string,
        address: string,
        sponsor: string
    ) {
        this.id = id;
        this.status = status;
        this.image = image;
        this.title = title;
        this.address = address;
        this.sponsor = sponsor;
    }

    setFloors(floors : Array<Floor>) {
        this.floors = floors;
    }
}