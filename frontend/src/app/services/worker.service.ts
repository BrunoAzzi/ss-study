import { HttpClientService } from './http-client.service';
import { Worker } from './../models/worker.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkerService {

	private endpoint = "/workers"

    constructor(private service : HttpClientService) { }

    getWorkerList() {
		return this.service.get(this.endpoint)
            .map(
				jsonResponse => {
				return jsonResponse.workers
			})
	}

	getWorker(id) {
		return this.service.get(this.endpoint + "/" + id)
			.map(jsonResponse => {
				return new Worker()
			}) 
	}

	getWorkerByCpf(cpf: string) {
		cpf = cpf.replace(/[^0-9]+/g, '');
		return this.service.get(this.endpoint + "/cpf/" + cpf)
			.map(jsonResponse => {

				return new Worker().initializeWithJSON(jsonResponse.worker)
			});
	}
}
