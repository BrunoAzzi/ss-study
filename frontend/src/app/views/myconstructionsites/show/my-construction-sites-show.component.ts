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
    LAST_SAVED = "last_saved";
    FIRST_SAVED = "first_saved";

	constructionSiteList: ConstructionSite[];
    filteredConstructionSiteList: ConstructionSite[] = this.constructionSiteList;

    states = [
        { name: "Últimos cadastrados", code: "last_saved" },
        { name: "Primeiros cadastrados", code: "first_saved" }
    ];

	order: string = this.LAST_SAVED;

	listActived: boolean = true;
	blockActived: boolean = !this.listActived;

	states = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private constructionSiteService: ConstructionSiteService) {
		constructionSiteService.getConstructionSite().subscribe(data => {
            this.constructionSiteList = data;
            this.filteredConstructionSiteList = this.constructionSiteList;
        });
	}

    }

    toggleView() {
        this.listActived = !this.listActived;
        this.blockActived = !this.blockActived;
    }

    }

    setListView() {
        this.listActived = true;
        this.blockActived = false;
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
