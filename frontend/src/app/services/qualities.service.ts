import { HttpClientService } from './http-client.service';
import { Quality } from '../models/Quality.model';
import { Injectable } from '@angular/core';

@Injectable()
export class QualitiesService {

    private endpoint = '/qualities';

    constructor(private service: HttpClientService) {}


    getQualitiesList() {
        return this.service.get(this.endpoint).map(jsonResponse => {
            return jsonResponse.qualities.map((jsonQualities) => {
                console.log('qualities',jsonQualities);
                return new Quality().initializeWithJSON(jsonQualities);
            });
        });

    }

}
