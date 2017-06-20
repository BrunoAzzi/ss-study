import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from "../../../models/supplier.model";

@Component({
    selector: 'supplier-list',
    templateUrl: 'list.template.html',
    styleUrls: ['./list.component.scss']
})
export class SupplierListComponent implements OnInit {
    LAST_SAVED = "last_saved";
    FIRST_SAVED = "first_saved";

    activeFilters = {
        text: ""
    }

    supplierList: Supplier[] = [];

	selectedOrder: string = this.LAST_SAVED;
	availableOrders = [
		{ name: "Últimos cadastrados", code: this.LAST_SAVED },
		{ name: "Primeiros cadastrados", code: this.FIRST_SAVED }
	];

	constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.supplierList = data.suppliers)
    }

    redirectTo(route) {
        this.router.navigate([route], { relativeTo: this.route });
    }

    getFilteredSuppliers() {
        return this.supplierList.filter(supplier => supplier.constains(this.activeFilters.text))
    }

    filterByText(text) {
        this.activeFilters = {
            ...this.activeFilters,
            text: text
        }
    }
}
