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

    getConstructionList() {
		return this.http.get(this.url)
            .map(response => response.json().data)
            .map(data => {
                return this.constructions = data.map(value => {
                    console.log(value)
                    return this.serializeConstruction(value)
                })
            })
	}

	getConstruction(id) {
        return this.http.get(this.url + "/" + id)
            .map(response => response.json().data)
            .map(data => this.construction = this.serializeConstruction(data))
	}

    serializeConstruction(construction : IConstruction) {
        return new Construction(construction)
    }

	updateFloor(floor: Floor) {
        let section = this.construction.sectors.find((sector) => {
            return sector.id === floor.section.id
        })
        section.floors = section.floors.map(f => {
			if (f.name === floor.name) {
				return floor
			}
			return f
		})
	}
}
