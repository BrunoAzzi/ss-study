import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from "../../../models/provider.model";

@Component({
    selector: 'provider-list',
    templateUrl: 'list.template.html',
    styleUrls: ['./list.component.scss']
})
export class ProviderListComponent implements OnInit {
    LAST_SAVED = "last_saved";
    FIRST_SAVED = "first_saved";

    activeFilters = {
        text: ""
    }

    providerList: Provider[] = [];

	selectedOrder: string = this.LAST_SAVED;
	availableOrders = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.providerList = data.providers)
    }

    redirectTo(route) {
        this.router.navigate([route], { relativeTo: this.route });
    }

    getFilteredProviders() {
        return this.providerList.filter(provider => provider.constains(this.activeFilters.text))
    }

    filterByText(text) {
        this.activeFilters = {
            ...this.activeFilters,
            text: text
        }
    }
}
