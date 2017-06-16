import { Sector } from './sector.model'
import { Alert } from './alert.model'
import { Marker } from './marker.model'

export interface IFloor {
    id: number
    name: string
    acronym: string
    bounds: [number, number][]
    imagePath: string
    sectionName: string
    sector: Sector
    markers: Array<any>
    conesNumber(): number
    workersNumber(): number
    alertsNumber(): number
}

export class Floor implements IFloor {

    id: number
    name: string
    acronym: string
    sectionName: string

    bounds: [number, number][]
    imagePath: string

    markers: Array<Marker> = []
    alerts: Array<Alert> = []
    sector: Sector

    constructor(data: IFloor, parentSector: Sector) {
        this.id = data.id
        this.name = data.name
        this.acronym = data.acronym
        this.bounds = data.bounds
        this.imagePath = data.imagePath
        this.sector = parentSector

        // this.markers = data.markers.map(marker => new Marker(marker))

        this.alerts = [
            new Alert({ type: "WRONG_ACCESS", cone: "12842", worker: "Rodrigo Vicente", time: "10:10" }),
            new Alert({ type: "WRONG_ACCESS", cone: "11111", worker: "João da Silva Antunes", time: "10:00" }),
            new Alert({ type: "WRONG_ACCESS", cone: "22222", worker: "Camila Rodrigues", time: "10:10" }),
            new Alert({ type: "LOW_BATTERY", cone: "12842", time: "10:00" }),
            new Alert({ type: "LOW_BATTERY", worker: "João da Silva Antunes", time: "10:10" }),
        ]
    }

    conesNumber(): number {
        return this.markers.filter((coordinate) => {
            return coordinate.type === "checkpoint"
        }).length
    }

    workersNumber(): number {
        return this.markers.filter((coordinate) => {
            return coordinate.type === "worker"
        }).length
    }

    alertsNumber(): number {
        return this.alerts.length
    }
}
