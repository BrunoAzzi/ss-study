export class ConstructionSite {
    id: number;
    status: string;
    image: string;
    title: string;
    address: string;
    // TODO improve this later, it should be a worker object
    sponsor: string;

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
}
