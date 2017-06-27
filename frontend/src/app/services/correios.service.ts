import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CorreiosService {
    public resp:any;
    private CORREIOS_URL: string = 'http://correiosapi.apphb.com/cep/';
    private JSONP_CALLBACK: string = "?callback=JSONP_CALLBACK";

    constructor(private jsonp: Jsonp) { }

    public getAddress(cep: string) {
        let preapredUrl = this.CORREIOS_URL.concat(this.cleanCEP(cep)).concat(this.JSONP_CALLBACK);
        return this.jsonp.get(preapredUrl).map(data => data.json());
    }

    private cleanCEP(cep: string): string {
        return cep.trim().replace(/\D/g,'');
    }
}
