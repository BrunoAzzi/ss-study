import { Component, Input, OnInit } from '@angular/core';
import { ConstructionSite } from "../../../mocks/construction-site/construction-site";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-construction-sites-show',
    templateUrl: './my-construction-sites-show.template.html',
    styleUrls: ['./my-construction-sites-show.component.scss']
})
export class MyConstructionSitesShowComponent implements OnInit {
    LAST_SAVED = "last_saved";
    FIRST_SAVED = "first_saved";

	constructionSiteList: ConstructionSite[];
    filteredConstructionSiteList: ConstructionSite[] = this.constructionSiteList;

    showOnGoingConstructionSites: boolean = true;
    showStoppedConstructionSites: boolean = true;
    showEndedConstructionSites: boolean = true;

    showSearch: boolean = false;
    textFilter: string = "";

	order: string = this.LAST_SAVED;

	listActived: boolean = true;
	blockActived: boolean = !this.listActived;

	states = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data
			.subscribe((data: { constructionSiteList: ConstructionSite[] }) => {
				this.constructionSiteList = data.constructionSiteList;
				this.filteredConstructionSiteList = this.constructionSiteList
			});
    }

    addConstructionSite() {
        this.router.navigate(['../add'], { relativeTo: this.route });
    }

    toggleSearch() {
        this.showSearch = !this.showSearch;
    }

    filterByText(event) { }

	orderBy(order: string) {
		// TODO improve to a more explicit implementation using date
		this.filteredConstructionSiteList.reverse();
	}

    toggleOnGoingFilter() {
        this.showOnGoingConstructionSites = !this.showOnGoingConstructionSites;
        this.makeList();
    }

    toggleStoppedFilter() {
        this.showStoppedConstructionSites = !this.showStoppedConstructionSites;
        this.makeList();
    }

    toggleEndedFilter() {
        this.showEndedConstructionSites = !this.showEndedConstructionSites;
        this.makeList();
    }

    makeList() {
        this.filteredConstructionSiteList = this.constructionSiteList

        if (!this.showOnGoingConstructionSites) this.filterOnGoingConstructionSites();
        if (!this.showStoppedConstructionSites) this.filterStoppedConstructionSites();
        if (!this.showEndedConstructionSites) this.filterEndedConstructionSites()
        if (this.showSearch) this.filterTextExpression();
    }

    filterTextExpression() {
        this.filteredConstructionSiteList = this.filteredConstructionSiteList.filter(constructionSite => {
            // TODO improve field search, to only use some fields (name, description, etc)
            return JSON.stringify(constructionSite).indexOf(this.textFilter) > -1;
        });
    }

    filterOnGoingConstructionSites() {
        this.filteredConstructionSiteList = this.filteredConstructionSiteList.filter(constructionSite => {
            // TODO improve the use of "em andamento" with a constant, or a type in class
            return constructionSite.status !== "em andamento";
        });
    }

    filterStoppedConstructionSites() {
        this.filteredConstructionSiteList = this.filteredConstructionSiteList.filter(constructionSite => {
            // TODO same as "em andamento"
            return constructionSite.status !== "paralisada";
        });
    }

    filterEndedConstructionSites() {
        this.filteredConstructionSiteList = this.filteredConstructionSiteList.filter(constructionSite => {
            // TODO same as "em andamento"
            return constructionSite.status !== "finalizada";
        });
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
