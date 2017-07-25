import { HttpClientService } from './http-client.service';
import { Quality } from '../models/Quality.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QualitiesService {

    private endpoint = '/qualities';

    constructor(private service: HttpClientService) {}

     getQualitiesList() : Observable<Array<any>> {

        return this.service.get(this.endpoint)
            .map((jsonResponse) => {
                return jsonResponse.qualities.map(quality => {
                    return new Quality().initializeWithJSON(quality);
                });
            });
    }


}
