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
export class ConstructionsResolver implements Resolve<any> {
	constructor(
        private service: ConstructionsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.getConstructions().map(data => {
            this.service.constructions = data.constructions;
            return data;
        });
	}
}
