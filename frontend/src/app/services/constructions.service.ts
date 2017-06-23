import { Floor } from './../models/floor.model';
import { Observable } from 'rxjs/Observable';
import { Construction, IConstruction } from './../models/construction.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ConstructionsService {

    private url = "api/constructionSiteList"
    public constructions: Array<Construction> = []
    public construction: Construction

    constructor(private http: Http) { }

    getConstruction(id : number) {

        return this.http.get(this.url + "/" + id)
            .map(response => response.json().data)
            .map(data => this.construction = this.serializeConstruction(data))
	}

    getConstructionList() {

		return this.http.get(this.url)
            .map(response => response.json().data)
            .map(data => {
                return this.constructions = data.map(value => {
                    return this.serializeConstruction(value)
                })
            })
	}

    saveConstruction(construction : Construction) {
        if (construction.id) {
            this.updateConstruction(construction)
        } else {
            this.createConstruction(construction)
        }
    }

    createConstruction(construction : Construction) {
        construction.id = Math.max.apply(this.constructions.map(c => c.id)) + 1
        this.constructions.push(construction)
    }

    updateConstruction(construction : Construction) {
        const i = this.constructions.findIndex((c, index, array) => {
            return c.id === construction.id
        })
        this.constructions[i] = construction
    }

    newConstruction() {
        this.construction = new Construction()
        return this.construction
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

    private serializeConstruction(construction: IConstruction) {
        let c = new Construction()
        c.setConstruction(construction)
        return c
    }
}
