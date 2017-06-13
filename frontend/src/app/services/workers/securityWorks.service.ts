import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SecurityWorksService {
    private securityWorksUrl = "api/securityWorks";

    constructor(private http: Http) { }

    getSecurityWorks(cpf: string) {
       return (this.http.get(this.securityWorksUrl+"/"+cpf).map(
            response => {
                return response.json().data;
            }));
    }

}
