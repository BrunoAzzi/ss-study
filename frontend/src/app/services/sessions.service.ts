import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {HttpClientService} from "./http-client.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map'

@Injectable()
export class SessionsService {

  constructor(private service: HttpClientService) {
  }

    login(email: string, password: string) {
        return this.service.postLogin(JSON.stringify({ email: email, password: password }))
            .map((response: Response) => {
                let user = response.json();
                if (user.token) {
                    Cookie.set('auth_token', user.token);
                }
            });
    }

    logout() {
        Cookie.delete('auth_token');
    }

    isLoggedIn() : boolean {
        if (Cookie.get('auth_token')) {
            return true
        }
        return false
    }
}