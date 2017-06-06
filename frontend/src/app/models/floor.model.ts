import { Coordinate } from './coordinate.model';

export class Floor {
    id: number;
    name: string;
    bounds: [number, number][];
    imagePath: string;
    coordinates: Array<Coordinate> = [];
    sectionName: string;

    constructor(name: string, bounds: [number, number][], imagePath: string) {
        this.name = name;
        this.bounds = bounds;
        this.imagePath = imagePath;
    }
}