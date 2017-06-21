import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ConstructionSite} from '../../models/construction-site.model';

@Injectable()
export class ConstructionSiteService {
    private constructionSiteUrl = 'api/constructionSiteList';

    constructor(private http: Http) {
    }

    getConstructionSite() {
        return this.http.get(this.constructionSiteUrl).map(response => response.json().data);
    }

    // TODO: adicionar serviço quando a api estiver pronta
    saveConstructionSite(constructionSite: ConstructionSite) {
        return new Promise((resolve, reject) => {
            console.log(constructionSite.toJson());
            resolve();
        });
    }

}
