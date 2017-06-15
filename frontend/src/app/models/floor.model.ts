import { Alert } from './alert.model';
import { Marker } from './marker.model';

export interface IFloor {
    id: number;
    name: string;
    acronym: string;
    bounds: [number, number][];
    imagePath: string;
    conesNumber(): number;
    workersNumber(): number;
    alertsNumber(): number;
}

export class Floor implements IFloor {

    id: number;
    name: string;
    acronym: string;
    bounds: [number, number][];
    imagePath: string;
    coordinates: Array<Marker> = [];
    alerts: Array<Alert> = []
    sectionName: string;

    constructor(data: IFloor) {
        this.name = data.name;
        this.acronym = data.acronym;
        this.bounds = data.bounds;
        this.imagePath = data.imagePath;
        this.sectionName = "Torre 1";

        this.alerts = [
            new Alert({ type: "WRONG_ACCESS", cone: "12842", worker: "Rodrigo Vicente", time: "10:10" }),
            new Alert({ type: "WRONG_ACCESS", cone: "11111", worker: "João da Silva Antunes", time: "10:00" }),
            new Alert({ type: "WRONG_ACCESS", cone: "22222", worker: "Camila Rodrigues", time: "10:10" }),
            new Alert({ type: "LOW_BATTERY", cone: "12842", time: "10:00" }),
            new Alert({ type: "LOW_BATTERY", worker: "João da Silva Antunes", time: "10:10" }),
        ]
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
