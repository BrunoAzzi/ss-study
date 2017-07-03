import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Company } from './../models/company.model';

@Injectable()
export class CompanyService {
    private endpoint = "/company";

    constructor(private service : HttpClientService) { }

    getCompany(id) {
        return this.service.get(this.endpoint + "/" + id)
            .map(response => {                
                return new Company(response.company);
            })
    }

    updateCompany(company: Company) {
       return this.service.put(this.endpoint + '/' + company.id, JSON.stringify(company))
       .map((response) => {
           return response;
       });
    }
}
