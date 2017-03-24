import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class AddAnnotationService {

  constructor(private http: Http) { }

  public getData() {
    return this.http.get('http://localhost:8080/template/getAllCoachee').map(
      (res) => res.json()
    );
  }




}
