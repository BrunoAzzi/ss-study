import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'construction-site',
    templateUrl: './construction-site.template.html',
    styleUrls: ['./construction-site.component.scss']
})
export class ConstructionSiteComponent {

    constructor(private router: Router) { }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
