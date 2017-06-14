import { Floor } from './../models/floor.model';
import { Observable } from 'rxjs/Observable';
import { Construction } from './../models/construction.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ConstructionsService {

    private url = "api/constructionSiteList";
    public constructions : Array<Construction> = [];
    public construction : Construction;

    constructor(private http: Http) {
        this.getConstructions();
    }

    getConstructions() {
        let o = Observable.of([
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
        ]).delay(5000).subscribe((constructions) => {
            this.constructions = constructions
            o.unsubscribe()
        })
    }

    getConstruction(id) {
        this.construction = this.constructions.find((construction) => {
            return construction.id == id;
        })

        let c = this.construction;
        c && c.setFloors([
            new Floor('5', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('4', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('3', [[0, 0], [413, 186]], 'assets/maps/piso.svg'),
            new Floor('2', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('1', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg'),
            new Floor('T', [[0, 0], [413, 186]], 'assets/maps/terreo.svg'),
            new Floor('SS', [[0, 0], [413, 186]], 'assets/maps/subsolo.svg')
        ])

        return Observable.create(observer => {
            setTimeout(() => {
                this.construction = c
                observer.next(c)
                observer.complete()
            }, 3000)
        })
    }

    updateFloor(floor: Floor) {
        this.construction.floors = this.construction.floors.map(f => {
            if (f.name === floor.name) {
                return floor
            }
            return f
        })
    }
}
