import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions  } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Company } from './../models/company.model';

@Injectable()
export class CompanyService {
    private endpoint = "/company";

    constructor(private http: Http, private service : HttpClientService) { }

    getCompany(id: number) {
        return this.service.get(this.endpoint + "/" + id)
            .map(response => {                
                return new Company(response.company);
            })
    }

    //TODO review get Method
    getCompanyLogo(id: number) {
        return this.service.getArrayBuffer(this.endpoint + "/" + id  + '/logo')
            .map( response => {
                //TODO fix method to retrieve BLOB file
                //console.log(response);
                return response;
        });
    }

    updateCompany(company: Company) {
       return this.service.put(this.endpoint + '/' + company.id, JSON.stringify(company))
       .map((response) => {
           return response;
       });
    }

    //TODO review post Method with Backend source
    updateCompanyLogo(company: Company, formData: any) {       
        
        return this.service.postWithNoHeaders(this.endpoint + '/' + company.id + '/logo', formData)
        .map((response) => {            
            return response
        });
    }
}
