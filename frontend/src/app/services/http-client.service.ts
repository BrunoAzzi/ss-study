import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClientService {

  protected url = "http://localhost:8080";

  constructor(private http: Http) {}

  postLogin(params) {
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + "/sessions", params, {headers: headers});
  }

}
