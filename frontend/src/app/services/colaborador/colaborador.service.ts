import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ColaboradorService {
    private colaboradorUrl = "api/colaborador";

    constructor(private http: Http) { }

    getColaborador() {
        return this.http.get(this.colaboradorUrl).map((response) => {
            return response.json().data
        })
    }

}
