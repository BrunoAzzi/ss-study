import {HttpClientService} from './http-client.service';
import {Floor} from './../models/floor.model';
import {Observable} from 'rxjs/Observable';
import {Construction, IConstruction} from './../models/construction.model';
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ConstructionsService {

    // private url = "api/constructionSiteList"

    private endpoint = '/constructions';
    public constructions: Array<Construction> = [];
    public construction: Construction;

    constructor(private service: HttpClientService) {
    }

    getConstruction(id: number) {

        return this.service.get(this.endpoint + '/' + id)
            .map((jsonResponse) => {
                this.construction = this.serializeConstruction(jsonResponse.construction);
                return Object.assign({}, this.construction);
            });
    }

    getConstructionList(): Observable<Array<Construction>> {

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

    saveConstruction(construction: Construction) {
        if (construction.id) {
            return this.updateConstruction(construction);
        } else {
            return this.createConstruction(construction);
        }
    }

    updateConstructionLogo(construction: Construction) {
        const formData = new FormData();
        formData.append('file', construction.imageFile);

        return this.service.postWithNoHeaders(this.endpoint + '/' + construction.id + '/logo', formData)
            .map((response) => {
                return response;
            });
    }

    updateFloorsImages(construction: Construction, floorsWithImage: Array<Floor>) {

        const existingFloors = construction.sectors.reduce((acc, sector) => acc.concat(sector.floors), []);

        const observables = floorsWithImage.reduce((obs, floor) => {
            const formData = new FormData();
            formData.append('file', floor.imageFile);

            if (!floor.id) {
                floor.id = existingFloors.find(f => f.name === floor.name).id
            }

            return [...obs, this.service.postWithNoHeaders('/floors/' + floor.id + '/blueprint', formData)
                .map((response) => {
                    return response;
                })
            ];
        }, []);

        console.log(observables);

        return Observable.forkJoin(observables);
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
        return this.service.post(this.endpoint, JSON.stringify(construction.toJSON()))
            .map((jsonResponse) => {
                return new Construction().initializeWithJSON(jsonResponse.construction);
            });
    }

    private updateConstruction(construction: Construction) {
        console.log('updated', construction);
        return this.service.put(this.endpoint + '/' + construction.id, JSON.stringify(construction.toJSON()))
            .map((jsonResponse) => {
                return new Construction().initializeWithJSON(jsonResponse.construction);
            });
    }

    private serializeConstruction(json: Object) {
        const c = new Construction();
        c.initializeWithJSON(json);
        return c;
    }

}
