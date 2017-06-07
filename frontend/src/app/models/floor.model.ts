import { Coordinate } from './coordinate.model';

export class Floor {

    id: number;
    name: string;
    bounds: [number, number][];
    imagePath: string;
    coordinates: Array<Coordinate> = [];
    alerts: Array<any> = []
    sectionName: string;

    constructor(name: string, bounds: [number, number][], imagePath: string) {
        this.name = name;
        this.bounds = bounds;
        this.imagePath = imagePath;
    }

    conesNumber() {
        return this.coordinates.filter((coordinate) => {
            return coordinate.type === "checkpoint"
        }).length;
    }

    workersNumber() {
        return this.coordinates.filter((coordinate) => {
            return coordinate.type === "worker"
        }).length;
    }

    alertsNumber() {
        return this.alerts.length;
    }
}