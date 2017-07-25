import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { HttpClientService } from "./http-client.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { User } from './../models/user.model';


@Injectable()
export class SessionsService {

  constructor(private service: HttpClientService) {
      this.service.setAuthUrl();
  }

    login(email: string, password: string) {
        return this.service.post('/sessions', JSON.stringify({ email: email, password: password }))
            .map((obj) => {
                if (obj.user && obj.user.token) {
                    Cookie.set('auth_token', obj.user.token);
                    localStorage.setItem('auth_current', JSON.stringify(obj.user));
                }
            });
    }

    logout() {
        Cookie.delete('auth_token');
        localStorage.removeItem('auth_current');
    }

    isLoggedIn() : boolean {
        if (Cookie.get('auth_token')) {
            this.service.setAuthToken(Cookie.get('auth_token'))
            return true
        }
     return false 
    }

    getCurrent() : any {
        let current = localStorage.getItem('auth_current');        
        if(current) {
            return JSON.parse(current);
        } else {
            return undefined;
        }
    }
}