import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CBOService {
    private CBOUrl = 'api/cbo';

    constructor(private http: Http) { }

    getCBO(cbo: string) {
        return (this.http.get(this.CBOUrl).map(
            response => {
                return response.json().data;
            }));
    }
}
