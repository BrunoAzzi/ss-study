import { Marker } from './marker.model';

export interface IFloor {
    id: number;
    name: string;
    bounds: [number, number][];
    imagePath: string;
    conesNumber(): number;
    workersNumber(): number;
    alertsNumber(): number;
}

export class Floor implements IFloor {

    id: number;
    name: string;
    bounds: [number, number][];
    imagePath: string;
    coordinates: Array<Marker> = [];
    alerts: Array<any> = []
    sectionName: string;

    constructor(data: IFloor) {
        this.name = data.name;
        this.bounds = data.bounds;
        this.imagePath = data.imagePath;
        this.sectionName = "Torre 1";
    }

    conesNumber(): number {
        return this.coordinates.filter((coordinate) => {
            return coordinate.type === "checkpoint"
        }).length;
    }

    workersNumber(): number {
        return this.coordinates.filter((coordinate) => {
            return coordinate.type === "worker"
        }).length;
    }

    alertsNumber(): number {
        return this.alerts.length;
    }
}
