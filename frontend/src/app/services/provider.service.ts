import { Provider } from './../models/provider.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProviderService {

    private url = "api/provider"

    constructor(private http: Http) { }

    getProviderList() {
		return this.http.get(this.url)
            .map(response => response.json().data)
            .map(data => data.map(value => new Provider(value)))
	}

	getProvider(id) {
        return this.http.get(this.url + "/" + id)
            .map(response => response.json().data)
            .map(data => new Provider(data))
	}
}
