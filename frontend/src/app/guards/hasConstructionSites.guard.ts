import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConstructionSiteService } from '../services/construction-site/construction-site.service';

@Injectable()
export class HasConstructionSitesGuard implements CanActivate {

    constructor(
        private router: Router,
        private constructionSiteService: ConstructionSiteService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.constructionSiteService.getConstructionSite().map(data => {
            if (data.length === 0) {
                return true;
            } else {
                this.router.navigate(['/constructions/list']);
                return false;
            }
        });
    }
}
