import { Occurrence } from './../models/occurrence.model';
import { Observable } from 'rxjs/Observable';
import { HttpClientService } from './http-client.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OccurrenceService {

    private endpoint = '/occurrence';
    public occurrences: Array<Occurrence> = [];

    constructor(private http: Http, private service: HttpClientService) { }

    getOccurenceList() : Observable<Array<any>> {

        return this.service.get(this.endpoint)
            .map((jsonResponse) => {
                return jsonResponse.occurrences.map(task => {
                    return new Occurrence().initializeWithJSON(task);
                });
            });
    }
}
