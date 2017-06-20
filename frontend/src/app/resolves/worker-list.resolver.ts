import { Worker } from './../models/worker.model';
import { WorkerService } from './../services/worker.service';
import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRoute,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class WorkerListResolver implements Resolve<Worker> {
	constructor(
        private service: WorkerService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getWorkerList()
	}
}
