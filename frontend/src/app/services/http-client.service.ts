import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpClientService {

  protected url = "http://localhost:8080";

  constructor(private http: Http) {}

  standardHeaders() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return { headers: headers }
  }

  post(path: String, params) {
    return this.http.post(this.url + path, params, this.standardHeaders())
      .map((response: Response) => {
        return response.text().length > 0 ? response.json() : {}
      });
  }

}