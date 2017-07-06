import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { HttpClientService } from "./http-client.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable()
export class SessionsService {

  constructor(private service: HttpClientService) {}

    login(email: string, password: string) {
        return this.service.post('/sessions', JSON.stringify({ email: email, password: password }))
            .map((obj) => {
                if (obj.user && obj.user.token) {                    
                    Cookie.set('auth_token', obj.user.token);
                    Cookie.set('auth_current', obj.user.id)
                }
            });
    }

    logout() {
        Cookie.delete('auth_token');
    }

    isLoggedIn() : boolean {
        if (Cookie.get('auth_token')) {
            this.service.setAuthToken(Cookie.get('auth_token'))
            return true
        }
     return false 
    }

    getCurrent() : any {
        let current = Cookie.get('auth_current');
        if(current) {
            return current;
        } else {
            return -1;
        }
    }
}