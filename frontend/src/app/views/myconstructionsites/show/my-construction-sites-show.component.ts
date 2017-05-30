import { Component, Input } from '@angular/core';
import { ConstructionSiteService } from "../../../services/construction-site/construction-site.service";
import { ConstructionSite } from "../../../mocks/construction-site/construction-site";

@Component({
    selector: 'my-construction-sites-show',
    templateUrl: './my-construction-sites-show.template.html',
    styleUrls: ['./my-construction-sites-show.component.scss'],
    providers: [ConstructionSiteService]
})
export class MyConstructionSitesShowComponent {
    constructionSiteList: ConstructionSite[];

    listActived: boolean = true;
    blockActived: boolean = !this.listActived;

    states = [
        { name: "Últimos cadastrados", code: "last_saved" },
        { name: "Primeiros cadastrados", code: "first_saved" }
    ];

    constructor(private constructionSiteService: ConstructionSiteService) {
        constructionSiteService.getConstructionSite().subscribe(data => this.constructionSiteList = data);
    }

    toggleView() {
        this.listActived = !this.listActived;
        this.blockActived = !this.blockActived;
    }

    setBlockView() {
        this.listActived = false;
        this.blockActived = true;
    }

    setListView() {
        this.listActived = true;
        this.blockActived = false;
    }
}
