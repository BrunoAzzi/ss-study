import { Injectable } from '@angular/core';
import { Construction } from './../models/construction.model';
import { ConstructionsService } from './../services/constructions.service';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRoute,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class ConstructionsListResolver implements Resolve<Construction[]> {
	constructor(
        private service: ConstructionsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getConstructionList().map(data => {
            return data;
        });
	}
}
