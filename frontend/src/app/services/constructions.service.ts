import { HttpClientService } from './http-client.service';
import { Floor } from './../models/floor.model';
import { Observable } from 'rxjs/Observable';
import { Construction, IConstruction } from './../models/construction.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ConstructionsService {

    // private url = "api/constructionSiteList"

    private endpoint = '/constructions';
    public constructions: Array<Construction> = [];
    public construction: Construction;

    constructor(private http: Http, private service: HttpClientService) { }

    getConstruction(id : number) {

        return this.service.get(this.endpoint + '/' + id)
            .map((jsonResponse) => {
                this.construction = this.serializeConstruction(jsonResponse.construction);
                return Object.assign({}, this.construction);
            });
	}

    getConstructionList() : Observable<Array<Construction>> {

        return this.service.get(this.endpoint)
            .map((jsonResponse) => {
                return jsonResponse.constructions.map(construction => {
                    return new Construction().initializeWithJSON(construction);
                });
            });
	}

    newConstruction() {
        this.construction = new Construction();
        return this.construction;
    }

    saveConstruction(construction : Construction) {
        if (construction.id) {
            return this.updateConstruction(construction);
        } else {
            return this.createConstruction(construction);
        }
    }

    updateFloor(floor: Floor) {
        const section = this.construction.sectors.find((sector) => {
            return sector.id === floor.sector.id;
        });
        if (section) {
            section.floors = section.floors.map(f => {
                if (f.name === floor.name) {
                    return floor;
                }
                return f;
            });
        }
    }

    private createConstruction(construction: Construction) {
        console.log('created', construction);
        return this.service.post(this.endpoint, JSON.stringify(construction.toJson()))
            .map((jsonResponse) => {
                console.log(jsonResponse);
                return jsonResponse;
            });
    }

    private updateConstruction(construction : Construction) {
        console.log('updated', construction);
        return this.service.put(this.endpoint + '/' + construction.id, JSON.stringify(construction.toJson()))
            .map((jsonResponse) => {
                console.log(jsonResponse);
                return jsonResponse;
            });
    }

    private serializeConstruction(json: Object) {
        const c = new Construction();
        c.initializeWithJSON(json);
        return c;
    }

}
