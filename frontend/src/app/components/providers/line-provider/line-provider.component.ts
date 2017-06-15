import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from "../../../models/provider.model";

@Component({
    selector: 'line-provider',
    templateUrl: './line-provider.template.html',
    styleUrls: ['./line-provider.component.scss']
})
export class LineProviderDetailComponent {
    @Input() provider: Provider;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    redirectTo(url) {
        console.log(url)
        this.router.navigate([url], { relativeTo: this.activatedRoute });
    }
}
