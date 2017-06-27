import { OnInit, OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { arraysAreEqual } from 'tslint/lib/utils';
import { Construction } from './../../../models/construction.model';
import { ConstructionsService } from './../../../services/constructions.service';

@Component({
    selector: 'constructions-list',
    templateUrl: './constructions-list.template.html',
    styleUrls: ['./constructions-list.component.scss']
})
export class ConstructionsListComponent implements OnInit, OnDestroy {
    LAST_SAVED = "last_saved";
    FIRST_SAVED = "first_saved";

    public constructions : Array<Construction> = []
    private sub : any

    ngOnInit() {

        this.sub = this.service.getConstructionList().subscribe((constructions) => {
            this.constructions = constructions
        })
    }

    ngOnDestroy() {

        this.sub.unsubscribe()
    }

    activeFilters = {
        text: "",
        onGoing: false,
        paralized: false,
        finished: true,
    }

    showSearch: boolean = false;

	selectedOrder: string = this.LAST_SAVED;
	availableOrders = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private router: Router, private route: ActivatedRoute, public service: ConstructionsService) { }

    editConstruction(id : number) {
        this.router.navigate([id, 'edit'], { relativeTo: this.route });
    }

    addConstruction() {
        this.router.navigate(['./new'], { relativeTo: this.route });
    }

    toggleSearch() {
        this.showSearch = !this.showSearch;
    }

    filterConstructions(constructions : Array<Construction>) {
        return constructions
            .filter(construction => {
                return (
                    !(this.activeFilters.onGoing && construction.status === "em andamento") &&
                    !(this.activeFilters.paralized && construction.status === "paralisada") &&
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
