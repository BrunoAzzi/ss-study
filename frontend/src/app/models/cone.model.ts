import { Risk } from './risk.model';
import { Marker } from './marker.model';

export class Cone {

    title: string
    identification: string

    marker: Marker
    risks: Array<Risk>

    constructor(data : any) {
        this.title = data.title
        this.identification = data.identification
        this.risks = data.risks.map(risk => new Risk(risk))
    }
}