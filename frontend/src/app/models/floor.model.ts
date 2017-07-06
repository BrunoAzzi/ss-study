import { Sector } from './sector.model';
import { Alert } from './alert.model';
import { Marker } from './marker.model';

export interface IFloor {
    id: number;
    name: string;
    acronym: string;
    bounds: [number, number][];
    imagePath: string;
    sector: Sector;
    markers: Array<any>;
    conesNumber(): number;
    workersNumber(): number;
    alertsNumber(): number;
}

export class Floor {

    id: number;
    name: string;
    acronym: string;

    image: any;
    imageFile: File;
    imagePath: string;

    markers: Array<Marker> = [];
    alerts: Array<Alert> = [];
    sector: Sector;

    initWithJSON(json: any, parentSector: Sector) {
        this.id = json.id;
        this.name = json.name;
        this.acronym = json.acronym;
        this.sector = parentSector;

        // this.bounds = json.bounds;
        this.imagePath = json.imageUrl;

        // this.markers = json.markers.map(marker => new Marker(marker))

        this.alerts = [
            new Alert({ type: 'WRONG_ACCESS', cone: '12842', worker: 'Rodrigo Vicente', time: '10:10' }),
            new Alert({ type: 'WRONG_ACCESS', cone: '11111', worker: 'João da Silva Antunes', time: '10:00' }),
            new Alert({ type: 'WRONG_ACCESS', cone: '22222', worker: 'Camila Rodrigues', time: '10:10' }),
            new Alert({ type: 'LOW_BATTERY', cone: '12842', time: '10:00' }),
            new Alert({ type: 'LOW_BATTERY', worker: 'João da Silva Antunes', time: '10:10' }),
        ];

        return this;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            acronym: this.acronym
        };
    }

    conesNumber(): number {
        return this.markers.filter((coordinate) => {
            return coordinate.type === 'checkpoint';
        }).length;
    }

    workersNumber(): number {
        return this.markers.filter((coordinate) => {
            return coordinate.type === 'worker';
        }).length;
    }

    alertsNumber(): number {
        return this.alerts.length;
    }
}
