import { HttpClientService } from './http-client.service';
import { Floor } from './../models/floor.model';
import { Observable } from 'rxjs/Observable';
import { Construction, IConstruction } from './../models/construction.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ConstructionsService {

    private url = "api/constructionSiteList"
    private endpoint = "/constructions"
    public constructions: Array<Construction> = []
    public construction: Construction

    constructor(private http: Http, private service: HttpClientService) { }

    getConstruction(id : number) {

        return this.http.get(this.url + "/" + id)
            .map(response => response.json().data)
            .map(data => this.construction = this.serializeConstruction(data))

        // return this.service.get(this.endpoint + "/" + id)
        //     .map((obj) => {
        //         console.log(obj)
        //         return obj
        //     });
	}

    getConstructionList() {

		return this.http.get(this.url)
            .map(response => response.json().data)
            .map(data => {
                return this.constructions = data.map(value => {
                    return this.serializeConstruction(value)
                })
            })

        // return this.service.get(this.endpoint)
        //     .map((obj) => {
        //         console.log(obj)
        //         return obj
        //     });
	}

    newConstruction() {
        this.construction = new Construction()
        return this.construction
    }

    saveConstruction(construction : Construction) {
        if (construction.id) {
            this.updateConstruction(construction)
        } else {
            this.createConstruction(construction)
        }
    }

    updateFloor(floor: Floor) {
        let section = this.construction.sectors.find((sector) => {
            return sector.id === floor.sector.id
        })
        if (section) {
            section.floors = section.floors.map(f => {
                if (f.name === floor.name) {
                    return floor
                }
                return f
            })
        }
	}

    private createConstruction(construction : Construction) {
        construction.id = Math.max.apply(this.constructions.map(c => c.id)) + 1
        this.constructions.push(construction)
    }

    private updateConstruction(construction : Construction) {
        const i = this.constructions.findIndex((c, index, array) => {
            return c.id === construction.id
        })
        this.constructions[i] = construction
    }

    private serializeConstruction(construction: IConstruction) {
        let c = new Construction()
        c.setConstruction(construction)
        return c
    }
}
