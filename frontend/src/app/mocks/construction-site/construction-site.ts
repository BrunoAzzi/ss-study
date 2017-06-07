export class ConstructionSite {
    status: string;
    image: string;
    title: string;
    address: string;
    // TODO improve this later, it should be a worker object
    sponsor: string;

    constructor(
        status: string,
        image: string,
        title: string,
        address: string,
        sponsor: string
    ) {
        this.status = status;
        this.image = image;
        this.title = title;
        this.address = address;
        this.sponsor = sponsor;

    }
}
