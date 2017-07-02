import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Company } from './../models/company.model';

//TODO Refactor FakeCompanyService get method to CompanyService
@Injectable()
export class FakeCompanyService {
    private companyUrl = "api/company";

    constructor(private http: Http) { }

    getCompany() {
        return this.http.get(this.companyUrl).map( response => response.json().data )
    }
}

@Injectable()
export class CompanyService {
    private endpoint = "/company";

    constructor(private service : HttpClientService) { }

    updateCompany(company: Company) {
       return this.service.put(this.endpoint + '/' + company.id, JSON.stringify(company))
       .map((response) => {
           return response;
       });
    }
}
