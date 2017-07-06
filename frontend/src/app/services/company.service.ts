import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Company } from './../models/company.model';

@Injectable()
export class CompanyService {
    private endpoint = '/company';

    constructor(private service: HttpClientService) { }

    getCompany() {
        return this.service.get(this.endpoint + '/' + 1)
            .map(response => {
                return new Company(response.company);
            });
    }

    getCompanyLogo(company: Company) {
        return this.service.getAbsolutePath(company.logoUrl);
    }

    updateCompany(company: Company) {
       return this.service.put(this.endpoint + '/' + company.id, JSON.stringify(company))
       .map((response) => {
           return response;
       });
    }

    updateCompanyLogo(company: Company, formData: any) {
        return this.service.postWithNoHeaders(this.endpoint + '/' + company.id + '/logo', formData)
        .map((response) => {
            return response;
        });
    }
}
