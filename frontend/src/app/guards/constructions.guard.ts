import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConstructionsService } from '../services/constructions.service';

@Injectable()
export class ConstructionsGuard implements CanActivate {

    constructor(
        private router: Router,
        private service: ConstructionsService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getConstructionList().map(data => {
			if (data.length === 0) {
				return true;
			} else {
				this.router.navigate(['/constructions/list']);
				return false;
			}
		});
    }
}
