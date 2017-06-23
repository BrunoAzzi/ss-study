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
                new Collaborator(1, 'MARIA CRESCENCIO', 'SERVENTE', '039.987.789-20'),
                new Collaborator(2, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-20'),
                new Collaborator(3, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-20'),
                new Collaborator(4, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-20'),
                new Collaborator(5, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-20'),
                new Collaborator(6, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-20'),
                new Collaborator(7, 'JOÃO CRESCENCIO', 'CARPINTEIRO', '039.987.789-20'),
                new Collaborator(8, 'JOÃO CRESCENCIO', 'SERVENTE', '039.987.789-20'),
            ]);
        });
    }
}
