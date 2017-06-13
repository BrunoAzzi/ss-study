import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ConstructionSiteService {
    private constructionSiteUrl = "api/constructionSiteList";

    constructor(private http: Http) { }

    getConstructionSite() {
        return this.http.get(this.constructionSiteUrl).map(response => response.json().data)
    }

}
