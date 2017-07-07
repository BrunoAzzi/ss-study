import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WorkersDataService {
    private workersDataUrl = 'api/workersData';
    private cpf            = '23';

    constructor(private http: Http) { }

    getWorker(cpf: string) {
        return this.http.get(this.workersDataUrl).map((response) => {
            return response.json().data;
        });
    }

    setCPF(cpfValue: string) {
        console.log(cpfValue);
        this.cpf = cpfValue;

    }

    getCPF() {
        console.log('service' + this.cpf);
        return this.cpf;
    };

}
