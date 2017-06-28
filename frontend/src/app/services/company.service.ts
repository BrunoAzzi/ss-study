import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CompanyService {
    private companyUrl = "api/company";

    constructor(private http: Http) { }

    getCompany() {
        return this.http.get(this.companyUrl).map( response => response.json().data )
    }
}
