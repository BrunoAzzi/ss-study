import { Marker } from './marker.model';

export class Floor {

    id: number;
    name: string;
    bounds: [number, number][];
    imagePath: string;
    coordinates: Array<Marker> = [];
    alerts: Array<any> = []
    sectionName: string;

    constructor(name: string, bounds: [number, number][], imagePath: string) {
        this.name = name;
        this.bounds = bounds;
        this.imagePath = imagePath;
        this.sectionName = "Torre 1";
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