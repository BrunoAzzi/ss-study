import { ConstructionsService } from './../../../services/constructions.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'constructions-list',
    templateUrl: './constructions-list.template.html',
    styleUrls: ['./constructions-list.component.scss']
})
export class ConstructionsListComponent implements OnInit {
    LAST_SAVED = "last_saved";
    FIRST_SAVED = "first_saved";

    activeFilters = {
        text: "",
        onGoing: false,
        paralized: false,
        finished: false,
    }

    showSearch: boolean = false;

	selectedOrder: string = this.LAST_SAVED;
	availableOrders = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private router: Router, private route: ActivatedRoute, public service: ConstructionsService) { }

    ngOnInit() { }

    addConstructionSite() {
        this.router.navigate(['./new'], { relativeTo: this.route });
    }

    toggleSearch() {
        this.showSearch = !this.showSearch;
    }

    getFilteredConstructions() {
        return this.service.constructions
            .filter(construction => {
                return (
                    !(this.activeFilters.onGoing && construction.status === "em andamento") &&
                    !(this.activeFilters.paralized && construction.status === "paralizada") &&
                    !(this.activeFilters.finished && construction.status === "finalizada") &&
                    !(this.activeFilters.text.length > 0 && construction.title.toLowerCase().indexOf(this.activeFilters.text.toLowerCase()) === -1)
                )
            })
    }

    toggleActiveFilter(filterName) {
        this.activeFilters = {
            ...this.activeFilters,
            [filterName]: !this.activeFilters[filterName]
        }
    }

    filterByText(text) {
        this.activeFilters = {
            ...this.activeFilters,
            text: text
        }
    }

	orderBy(order: string) {
		// TODO improve to a more explicit implementation using date
		// this.filteredConstructionSiteList.reverse();
	}
}
