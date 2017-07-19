import { HttpClientService } from './http-client.service';
import { Worker } from '../models/worker.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkerService {

    private endpoint = '/workers';

    constructor(private service: HttpClientService) {}

    getWorkerList() {
        return this.service.get(this.endpoint).map(jsonResponse => {
            return jsonResponse.workers.map((jsonWorker) => {
                return new Worker().initializeWithJSON(jsonWorker);
            });
        });
    }

    getWorker(id) {
        return this.service.get(this.endpoint + '/' + id).map(jsonResponse => {
            return new Worker().initializeWithJSON(jsonResponse.worker);
        });
    }

    saveWorker(worker: Worker) {
        console.log('Worker saved', worker);
        if (worker.id) {
            return this.updateWorker(worker);
        } else {
            return this.createWorker(worker);
        }
    }

    getWorkerByCpf(cpf: string) {
        cpf = cpf.replace(/[^0-9]+/g, '');
        return this.service.get(this.endpoint + '/cpf/' + cpf).map(jsonResponse => {
            console.log(jsonResponse);
            if (jsonResponse.worker) {
                return new Worker().initializeWithJSON(jsonResponse.worker);
            } else {
                return new Worker();
            }
        });
    }

    getCBO(value) {
        return this.service.get(this.endpoint + '/cbo/' + value).map(jsonResponse => {
            return jsonResponse.cbo;
        });
    }

    private createWorker(worker: Worker) {
        return this.service.post(this.endpoint, JSON.stringify(worker.toJSON())).map((jsonResponse) => {
            return new Worker().initializeWithJSON(jsonResponse.worker);
        });
    }

    private updateWorker(worker: Worker) {
        return this.service.put(this.endpoint, JSON.stringify(worker)).map((jsonResponse) => {
            return new Worker().initializeWithJSON(jsonResponse.worker);
        });
    }
}
