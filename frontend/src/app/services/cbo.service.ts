import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CBOService {
    private CBOUrl = "api/CBO";

    constructor(private http: Http) { }

    getCBO() {
        return (this.http.get(this.CBOUrl).map(response => response.json().data));
    }

}
