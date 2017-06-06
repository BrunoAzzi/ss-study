import { Icon } from './icon.model';
export class Coordinate {
    id: number;
    icon: Icon;
    lastPosition: [number, number];
    private _position: [number, number];

    set position(newPosition: [number, number]) {
        if (this._position !== newPosition) {
            this.lastPosition = this._position;
        }
        this._position = newPosition;
    }

    get position() : [number, number] {
        return this._position;
    }

    constructor(position: [number, number], icon: Icon) {
        this.position = position;
        this.icon = icon;
    }


}