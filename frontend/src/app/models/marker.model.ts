import { Cone } from './cone.model'
import { Icon } from './icon.model'

export class Marker {

    id: number
    icon: Icon
    type: string

    lastPosition: [number, number]
    private _position: [number, number]

    cone: Cone

    constructor(position: [number, number], icon: Icon, type: string) {
        this.position = position
        this.icon = icon
        this.type = type
    }

    set position(newPosition: [number, number]) {
        if (this._position !== newPosition) {
            this.lastPosition = this._position
        }
        this._position = newPosition
    }

    get position() : [number, number] {
        return this._position
    }
}