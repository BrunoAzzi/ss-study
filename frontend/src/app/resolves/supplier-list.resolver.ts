import { Injectable } from '@angular/core';
import { Supplier } from './../models/supplier.model';
import { SupplierService } from './../services/supplier.service';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRoute,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class SupplierListResolver implements Resolve<Supplier[]> {
	constructor(
        private service: SupplierService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getSupplierList()
	}
}
