import { Component } from '@angular/core';



@Component({
  selector: 'myconstructionsites',
  templateUrl: './myconstructionsites.template.html',
  styleUrls: ['./myconstructionsites.component.scss']
})
export class MyConstructionSitesComponent {

  mapImage = [{ 'titulo': '2ºGaragem', 'url': 'assets/map.png' }];
  popUp = 'assets/popUp.png';
  view = false;

  phaserConfig = {
    zoomMin: 0.1,
    zoomMax: 10,
    width: window.innerWidth - 400,
    height: window.innerHeight-300,
    callModal : this.callModal,
    menu: {
      position: "top",
      buttons: [
        { 'name': 'buttonCone', 'button': 'assets/ConeButtonSheet.png', 'item': 'assets/ConeItem.png' },
        { 'name': 'buttonAgua', 'button': 'assets/AguaButtonSheet.png', 'item': 'assets/AguaItem.png' },
        { 'name': 'buttonAlojamento', 'button': 'assets/AlojamentoButtonSheet.png', 'item': 'assets/AlojamentoItem.png' },
        { 'name': 'buttonBandeja', 'button': 'assets/BandejaButtonSheet.png', 'item': 'assets/BandejaItem.png' },
        { 'name': 'buttonBanheiro', 'button': 'assets/BanheiroButtonSheet.png', 'item': 'assets/BanheiroItem.png' },
        { 'name': 'buttonBarrier', 'button': 'assets/BarrierButtonSheet.png', 'item': 'assets/BarrierItem.png' },
        { 'name': 'buttonExtintor', 'button': 'assets/ExtintorButtonSheet.png', 'item': 'assets/ExtintorItem.png' },
        { 'name': 'buttonGrua', 'button': 'assets/GruaButtonSheet.png', 'item': 'assets/GruaItem.png' },
        { 'name': 'buttonMaquina', 'button': 'assets/MaquinaButtonSheet.png', 'item': 'assets/MaquinasItem.png' },
        { 'name': 'buttonPs', 'button': 'assets/PsButtonSheet.png', 'item': 'assets/PSItem.png' },
        { 'name': 'buttonRefeitorio', 'button': 'assets/RefeitorioButtonSheet.png', 'item': 'assets/RefeitorioItem.png' },
        { 'name': 'buttonTv', 'button': 'assets/TvButtonSheet.png', 'item': 'assets/TvItem.png' },
      ]
    }
  };

  phaserState = {
    mapImage: this.mapImage[0],

  }

  constructor() {
  }

  callModal(){
    
  }
}
