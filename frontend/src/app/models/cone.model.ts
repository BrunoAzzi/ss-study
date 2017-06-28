import { Risk } from './risk.model';
import { Marker } from './marker.model';
import { Collaborator } from './colLaborator.model';

export class Cone {

    title: string
    identification: string

    marker: Marker
    risks: Array<Risk>
    collaborators: Array<Collaborator>

    constructor(data : any) {
        this.title = data.title
        this.identification = data.identification
        this.risks = data.risks.map(risk => new Risk(risk))
        this.collaborators = data.filteredSelectedCollaborators.map(collaborator => 
        new Collaborator(collaborator.id, collaborator.name, collaborator.cpf, collaborator.occupation))
    }
}