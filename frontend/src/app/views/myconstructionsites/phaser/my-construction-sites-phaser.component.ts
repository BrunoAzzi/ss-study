import { Component } from '@angular/core';

@Component({
    selector: 'app-my-construction-sites-phaser',
    templateUrl: './my-construction-sites-phaser.component.html',
    styleUrls: ['./my-construction-sites-phaser.component.scss']
})
export class MyConstructionSitesPhaserComponent {
    mapImage = [{ 'titulo': '2ºGaragem', 'url': 'assets/phaser/map.png' }];
    popUp = 'assets/popUp.png';
    view = false;

    phaserConfig = {
        zoomMin: 0.1,
        zoomMax: 10,
        width: window.innerWidth - 400,
        height: window.innerHeight - 300,
        callModal: this.callModal,
        menu: {
            position: "top",
            buttons: [
                { 'name': 'buttonCone', 'button': 'assets/phaser/ConeButtonSheet.png', 'item': 'assets/phaser/ConeItem.png' },
                { 'name': 'buttonAgua', 'button': 'assets/phaser/AguaButtonSheet.png', 'item': 'assets/phaser/AguaItem.png' },
                { 'name': 'buttonAlojamento', 'button': 'assets/phaser/AlojamentoButtonSheet.png', 'item': 'assets/phaser/AlojamentoItem.png' },
                { 'name': 'buttonBandeja', 'button': 'assets/phaser/BandejaButtonSheet.png', 'item': 'assets/phaser/BandejaItem.png' },
                { 'name': 'buttonBanheiro', 'button': 'assets/phaser/BanheiroButtonSheet.png', 'item': 'assets/phaser/BanheiroItem.png' },
                { 'name': 'buttonBarrier', 'button': 'assets/phaser/BarrierButtonSheet.png', 'item': 'assets/phaser/BarrierItem.png' },
                { 'name': 'buttonExtintor', 'button': 'assets/phaser/ExtintorButtonSheet.png', 'item': 'assets/phaser/ExtintorItem.png' },
                { 'name': 'buttonGrua', 'button': 'assets/phaser/GruaButtonSheet.png', 'item': 'assets/phaser/GruaItem.png' },
                { 'name': 'buttonMaquina', 'button': 'assets/phaser/MaquinaButtonSheet.png', 'item': 'assets/phaser/MaquinasItem.png' },
                { 'name': 'buttonPs', 'button': 'assets/phaser/PsButtonSheet.png', 'item': 'assets/phaser/PSItem.png' },
                { 'name': 'buttonRefeitorio', 'button': 'assets/phaser/RefeitorioButtonSheet.png', 'item': 'assets/phaser/RefeitorioItem.png' },
                { 'name': 'buttonTv', 'button': 'assets/phaser/TvButtonSheet.png', 'item': 'assets/phaser/TvItem.png' },
            ]
        }
    };

    phaserState = {
        mapImage: this.mapImage[0]
    }

    constructor() { }

    callModal() { }
}
