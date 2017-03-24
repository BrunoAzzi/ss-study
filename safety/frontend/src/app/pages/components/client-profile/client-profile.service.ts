import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ClientProfileService {

  constructor(private http: Http) {}

  getData(){
    return this.http.get('http://localhost:8080/template/getAllCoachee').map(
      (res)=>res.json()
    );
  }

}
