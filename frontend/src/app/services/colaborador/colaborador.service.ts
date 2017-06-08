import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ColaboradorService {
    private colaboradorUrl = "api/colaborador";

    constructor(private http: Http) { }

    getColaborador() {
        console.log(this.http.get(this.colaboradorUrl));
        return this.http.get(this.colaboradorUrl).map((response) => {
            console.log(response.json().data);
            return response.json().data
        })
    }

}
