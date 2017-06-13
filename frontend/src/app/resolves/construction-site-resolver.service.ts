import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConstructionSite } from '../mocks/construction-site/construction-site';
import { ConstructionSiteService } from '../services/construction-site/construction-site.service';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRoute,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class ConstructionSiteResolver implements Resolve<any> {
	constructor(
        private constructionSiteService: ConstructionSiteService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.constructionSiteService.getConstructionSite().map(data => {
            if (data.length === 0) {
                this.router.navigate(['/myconstructionsites/landing-page']);
            }
            return data;
        });
	}
}
