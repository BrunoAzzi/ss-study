import { ConstructionsService } from './../../../services/constructions.service';
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

    private activeFilters = {
        onGoing: false,
        paralized: false,
        finished: false,
    }

    showSearch: boolean = false;
    textFilter: string = "";

	order: string = this.LAST_SAVED;

	listActived: boolean = true;
	blockActived: boolean = !this.listActived;

	states = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private router: Router, private route: ActivatedRoute, private service: ConstructionsService) { }

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

    filterByText(event) { 

    }

    getFilteredConstructions() {
        return this.service.constructions.filter(construction => {
            return (
                !(this.activeFilters.onGoing && construction.status === "em andamento") &&
                !(this.activeFilters.paralized && construction.status === "paralizada") &&
                !(this.activeFilters.finished && construction.status === "finalizada")
            )
        })
    }

    toggleActiveFilter(filterName) {
        this.activeFilters = {
            ...this.activeFilters,
            [filterName]: !this.activeFilters[filterName]
        }
    }

	orderBy(order: string) {
		// TODO improve to a more explicit implementation using date
		this.filteredConstructionSiteList.reverse();
	}

    makeList() {
        this.filteredConstructionSiteList = this.constructionSiteList

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
            return constructionSite.status !== "paralizada";
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
