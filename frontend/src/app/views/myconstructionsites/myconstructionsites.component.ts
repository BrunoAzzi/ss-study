import { Component } from '@angular/core';
import { ConstructionSiteService } from "../../services/construction-site/construction-site.service";
import { ConstructionSite } from "../../mocks/construction-site/construction-site";

@Component({
    selector: 'myconstructionsites',
    templateUrl: './myconstructionsites.template.html',
    styleUrls: ['./myconstructionsites.component.scss'],
    providers: [ConstructionSiteService]
})
export class MyConstructionSitesComponent {
    constructionSiteList: ConstructionSite[];

    constructor(private constructionSiteService: ConstructionSiteService) {
        constructionSiteService.getConstructionSite().subscribe(data => this.constructionSiteList = data);

        // if (this.constructionSiteList.length > 0) {
        //redirect to /list
        // }
    }


}
