import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class HttpClientService {

  private url = environment.backendUrl;
  private authToken;
  private http: Http;
  private router: Router;

  constructor() { }

  setAuthUrl() {
    this.url = environment.authUrl;
  }

  standardHeaders() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json')
    if (this.authToken) headers.append('X-Authorization', this.authToken)
    return { headers: headers }
  }

  blankHeaders() {
    var headers = new Headers();
    //headers.append('Content-Type', 'multipart/form-data')
    this.authToken && headers.append('X-Authorization', this.authToken)
    return { headers: headers }
  }

  setAuthToken(token : string) {
    this.authToken = token
  }

  post(path: String, params) {
    return this.http.post(this.url + path, params, this.standardHeaders())
      .map((response: Response) => {
        return response.text().length > 0 ? response.json() : {}
      });
  }

  postWithNoHeaders(path: String, params) {
    return this.http.post(this.url + path, params, this.blankHeaders())
      .map((response: Response) => {
        return response ? response : {}
      });
  }

  get(path: string) {
    return this.http.get(this.url + path, this.standardHeaders())
      .map((response: Response) => {
        return response.json()
      })
  }

  getAbsolutePath(path: string) {
    return this.url + path;
  }

  put(path: String, params) {
    return this.http.put(this.url + path, params, this.standardHeaders())
      .map((response: Response) => {
        return response.text().length > 0 ? response.json() : {}
      });
  }

  delete(path: string) {
    return this.http.delete(this.url + path, this.standardHeaders())
      .map((response: Response) => {
        return response;
      });
  }

}