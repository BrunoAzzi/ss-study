import { Worker } from './../models/worker.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WorkerService {
    private url = "api/worker"

    constructor(private http: Http) { }

    getWorkerList() {
		return this.http.get(this.url)
            .map(response => response.json().data)
            .map(data => data.map(value => new Worker(value)))
	}

	getWorker(id) {
		return this.http.get(this.url + "/" + id)
			.map(response => response.json().data)
			.map(data => new Worker(data))
	}
}
