import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'construction-detail',
    templateUrl: './construction-detail.template.html',
    styleUrls: ['./construction-detail.component.scss']
})
export class ConstructionDetailComponent {

    constructor(private router: Router) { }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
