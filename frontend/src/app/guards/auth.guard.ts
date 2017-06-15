import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionsService } from '../services/sessions.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private sessionsService: SessionsService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var redirect = false;
        // if (this.sessionsService.isLoggedIn()) {
        //     return true;
        // }

        if (redirect) this.router.navigate(['/login']);
        // return false;
        return !redirect;
    }

}
