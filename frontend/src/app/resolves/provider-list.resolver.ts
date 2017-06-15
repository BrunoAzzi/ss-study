import { Injectable } from '@angular/core';
import { Provider } from './../models/provider.model';
import { ProviderService } from './../services/provider.service';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRoute,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class ProviderListResolver implements Resolve<Provider[]> {
	constructor(
        private service: ProviderService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getProviderList()
	}
}
