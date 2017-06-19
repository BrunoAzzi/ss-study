import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from "../../../models/supplier.model";

@Component({
    templateUrl: 'form.template.html',
    styleUrls: ['./form.component.scss']
})
export class SupplierFormComponent implements OnInit {

    supplier: Supplier = new Supplier();

	constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.supplier = data.supplier)
    }

}
