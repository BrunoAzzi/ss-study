import { Component, OnInit } from '@angular/core';
import { ConstructionSiteService } from "../../services/construction-site/construction-site.service";
import { ConstructionSite } from "../../mocks/construction-site/construction-site";
import { Router } from '@angular/router';

@Component({
    selector: 'myconstructionsites',
    templateUrl: './myconstructionsites.template.html',
    styleUrls: ['./myconstructionsites.component.scss'],
    providers: [ConstructionSiteService]
})
export class MyConstructionSitesComponent implements OnInit {
    constructionSiteList: ConstructionSite[] = [];
	mapImage = [{ 'titulo': '2ºGaragem', 'url': 'assets/phaser/map.png' }];
	popUp = 'assets/popUp.png';
	view = false;

    constructor(
        private constructionSiteService: ConstructionSiteService,
        private router: Router
    ) { }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }

    ngOnInit() {
        this.constructionSiteService.getConstructionSite().subscribe(data => {
            this.constructionSiteList = data;
            // TODO improve this using angular resolve guard
            if (this.constructionSiteList.length > 0) this.redirectToConstructionSiteList();
        });
    }

    redirectToConstructionSiteList() {
        this.router.navigate([this.router.url + '/list']);
    }
}
