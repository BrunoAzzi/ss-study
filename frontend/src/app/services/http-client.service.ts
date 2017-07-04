import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClientService {

  protected url = "http://localhost:8080";
  private authToken

  constructor(private http: Http, private router: Router) {}

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

  getArrayBuffer(path: string) {
    return Observable.create(observer=>{
            let req = new XMLHttpRequest(),
                url = this.url + path;
                req.open('get',url);
                req.setRequestHeader('X-Authorization', this.authToken);
                req.responseType = "arraybuffer";
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        observer.next(req.response);
                        observer.complete();
                    }
                };
                req.send();
        })
  }

  put(path: String, params) {
    return this.http.put(this.url + path, params, this.standardHeaders())
      .map((response: Response) => {
        return response.text().length > 0 ? response.json() : {}
      });
  }

}