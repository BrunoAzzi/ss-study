import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from "../../../models/supplier.model";

@Component({
    selector: 'line-supplier',
    templateUrl: './line-supplier.template.html',
    styleUrls: ['./line-supplier.component.scss']
})
export class LineSupplierDetailComponent {
    @Input() supplier: Supplier;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    redirectTo(url) {
        this.router.navigate([url], { relativeTo: this.activatedRoute });
    }
}
