import { Observable } from 'rxjs/Observable';
import { Construction } from './../models/construction.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ConstructionsService {

    private url = "api/constructionSiteList";
    public constructions : Array<Construction> = [];

    constructor(private http: Http) {
        this.getConstructions();
    }

    getConstructions() {
        Observable.of([
            new Construction(1, "paralizada", "alameda-domo.jpg", "Alameda Domo Club & Residence", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(2, "finalizada", "koerich.jpg", "Koerich Beiramar Office", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(3, "em andamento", "simple-koerich.jpg", "Koerich Empresarial Rio Branco", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(4, "paralizada", "alameda-domo.jpg", "Alameda Domo Club & Residence", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(5, "finalizada", "koerich.jpg", "Koerich Beiramar Office", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(6, "em andamento", "simple-koerich.jpg", "Koerich Empresarial Rio Branco", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(7, "paralizada", "alameda-domo.jpg", "Alameda Domo Club & Residence", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(8, "finalizada", "koerich.jpg", "Koerich Beiramar Office", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(9, "em andamento", "simple-koerich.jpg", "Koerich Empresarial Rio Branco", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(10, "paralizada", "alameda-domo.jpg", "Alameda Domo Club & Residence", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(11, "finalizada", "koerich.jpg", "Koerich Beiramar Office", "Novo Campeche, Florianópolis - SC", "João da Silva"),
            new Construction(12, "em andamento", "simple-koerich.jpg", "Koerich Empresarial Rio Branco", "Novo Campeche, Florianópolis - SC", "João da Silva"),
        ]).delay(3000).subscribe((constructions) => {
            this.constructions = constructions
        })
    }
}
