export class Coordinate {
    id: number;
    lastPosition: number[];
    private _position: number[];

    set position(newPosition: number[]) {
        if (this._position !== newPosition) {
            this.lastPosition = this._position;
        }
        this._position = newPosition;
    }

    get position() : number[] {
        return this._position;
    }

    constructor(position: number[]) {
        this.position = position;
    }


}