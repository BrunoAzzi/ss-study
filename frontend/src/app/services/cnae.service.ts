import { Injectable } from '@angular/core';

import { Cnae } from './../models/cnae.model'
import { HttpClientService } from './http-client.service';

@Injectable()
export class CnaeService {

    private endpoint = "/cnaes"
    public cnae: Cnae

    constructor(private service: HttpClientService) {}

    getCnae( code: string ) {        
        return this.service.get(this.endpoint + "/" + code)
			.map((response) => {
                return response.cnae;
			});
    }

}