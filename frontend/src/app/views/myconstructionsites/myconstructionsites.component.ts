import { Component } from '@angular/core';

@Component({
    selector: 'myconstructionsites',
    templateUrl: './myconstructionsites.template.html',
    styleUrls: ['./myconstructionsites.component.scss']
})
export class MyConstructionSitesComponent {

  mapImage = [{ 'titulo': '2ºGaragem', 'url': 'assets/phaser/map.png' }];
  popUp = 'assets/popUp.png';
  view = false;

  constructor() {
  }

  callModal(){
    
  }
}
