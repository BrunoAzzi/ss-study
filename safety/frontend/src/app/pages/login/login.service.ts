import {Injectable} from '@angular/core';
import {Http, Headers, Response ,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
   public token: string;

  constructor(private http: Http) {}

  loginSmartHealth(login, password) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var json = JSON.stringify({ "login": login,  "password": password });

    return this.http.post('http://localhost:8080/template/login', json, options).map(res => res.json());
    ;
  }

}
