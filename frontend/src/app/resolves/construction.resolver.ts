import { Construction } from './../models/construction.model';
import { ConstructionsService } from './../services/constructions.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRoute,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class ConstructionResolver implements Resolve<Construction> {
	constructor(
        private service: ConstructionsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getConstruction(route.params['id'])
	}
}
