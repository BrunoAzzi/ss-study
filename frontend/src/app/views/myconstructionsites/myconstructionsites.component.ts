import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'myconstructionsites',
    templateUrl: './myconstructionsites.template.html',
    styleUrls: ['./myconstructionsites.component.scss']
})
export class MyConstructionSitesComponent {

  constructor(private router: Router) {
  }

  activeRoute(routename: string): boolean {
      return this.router.url.indexOf(routename) > -1;
  }
}
