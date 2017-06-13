import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class WorkersDataService {
    private workersDataUrl = "api/workersData";

    constructor(private http: Http) { }

    getWorker(cpf: string) {
        return this.http.get(this.workersDataUrl).map((response) => {
            return response.json().data
        })
    }

}
