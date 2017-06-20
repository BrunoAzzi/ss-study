import { Supplier } from './../models/supplier.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SupplierService {

    private url = "api/supplier"

    constructor(private http: Http) { }

    getSupplierList() {
		return this.http.get(this.url)
            .map(response => response.json().data)
            .map(data => data.map(value => new Supplier(value)))
	}

	getSupplier(id) {
        return this.http.get(this.url + "/" + id)
            .map(response => response.json().data)
            .map(data => new Supplier(data))
	}
}
