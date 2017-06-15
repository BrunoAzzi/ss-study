import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'constructions-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class ConstructionsLandingPageComponent {
    constructor(public router: Router) { }
}
