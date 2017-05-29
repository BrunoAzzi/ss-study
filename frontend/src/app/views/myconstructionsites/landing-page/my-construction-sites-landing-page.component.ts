import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-construction-sites-landing-page',
    templateUrl: './my-construction-sites-landing-page.component.html',
    styleUrls: ['./my-construction-sites-landing-page.component.scss']
})
export class MyConstructionSitesLandingPageComponent {
    constructor(private router: Router) { }
}
