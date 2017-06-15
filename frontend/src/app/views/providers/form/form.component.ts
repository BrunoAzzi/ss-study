import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from "../../../models/provider.model";

@Component({
    templateUrl: 'form.template.html',
    styleUrls: ['./form.component.scss']
})
export class ProviderFormComponent implements OnInit {

    provider: Provider = new Provider();

	constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => this.provider = data.provider)
    }

}
