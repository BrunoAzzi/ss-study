import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Collaborator} from "../../models/colLaborator.model";

@Injectable()
export class CollaboratorService {
    private collaboratorUrl = 'api/collaborator';

    constructor(private http: Http) {
    }

    getColaborador() {
        return this.http.get(this.collaboratorUrl).map((response) => {
            return response.json().data;
        });
    }

    // TODO: ADICIONAR SERVIÇO
    getAllCollaborators() {
        return new Promise<Array<Collaborator>>((resolve, reject) => {
            resolve([
                new Collaborator(1, 'MARIA CRESCENCIO', 'SERVENTE', '039.987.789-21'),
                new Collaborator(2, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-22'),
                new Collaborator(3, 'JOÃO LIMA DA SILVA', 'SERVENTE', '039.987.789-23'),
                new Collaborator(4, 'PAULO PLANTIO', 'SERVENTE', '039.987.789-24'),
                new Collaborator(5, 'FLORIANO JEREMY', 'SERVENTE', '039.987.789-25'),
                new Collaborator(6, 'APARECIDA HESS', 'SERVENTE', '039.987.789-26'),
                new Collaborator(7, 'EDSON DO NASCIMENTOS', 'CARPINTEIRO', '039.987.789-27'),
                new Collaborator(8, 'FRANCISCO ELNO HERCULANO', 'LIDER', '039.987.789-28'),
            ]);
        });
    }
}
