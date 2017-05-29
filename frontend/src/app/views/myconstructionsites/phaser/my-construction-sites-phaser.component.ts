import { Component } from '@angular/core';

@Component({
    selector: 'app-my-construction-sites-phaser',
    templateUrl: './my-construction-sites-phaser.component.html',
    styleUrls: ['./my-construction-sites-phaser.component.scss']
})
export class MyConstructionSitesPhaserComponent {

    mapImage = [{ 'titulo': '2ºGaragem', 'url': 'assets/map.png' }];
    popUp = 'assets/popUp.png';
    view = false;

    phaserConfig = {
        width: 600,
        height: 600,
        callModal: this.callModal,
        menu: {
            position: "top",
            buttons: [
                { 'name': 'buttonCone', 'button': 'assets/ConeButtonSheet.png', 'clicked': 'assets/ConeButtonClicked.png', 'item': 'assets/ConeItem.png' },
                /*
                { 'name': 'buttonAloj', 'value': 'src/assets/alojamento.png', 'label': 'Alojamento' },
                { 'name': 'buttonWc', 'value': 'src/assets/banheiro.png', 'label': 'Banheiro' },
                { 'name': 'buttonBarrier', 'value': 'src/assets/barrier.png', 'label': 'Barrier' },
                { 'name': 'buttonCone', 'value': 'src/assets/cone.png', 'label': 'Cone' },
                { 'name': 'buttonExtintor', 'value': 'src/assets/extintor.png', 'label': 'Extintor' },
                { 'name': 'buttonGrua', 'value': 'src/assets/grua.png', 'label': 'Grua' },
                { 'name': 'buttonLavanderia', 'value': 'src/assets/lavanderia.png', 'label': 'Lavanderia' },
                { 'name': 'buttonPS', 'value': 'src/assets/primeirosSocorros.png', 'label': 'Primeiros Socorros' },
                { 'name': 'buttonTv', 'value': 'src/assets/tv.png', 'label': 'Sala TV' },
                { 'name': 'buttonMaq', 'value': 'src/assets/setorDeMaquinas.png', 'label': 'Maquina' },
                { 'name': 'buttonBandeja', 'value': 'src/assets/bandeja.png', 'label': 'Bandeja' }
                */
            ]
        }
    };

    phaserState = {
        mapImage: this.mapImage[0],
        marks: [
            { name: 'buttonWater', value: 'assets/agua.png', label: 'Água', position: { x: 10, y: 20 } }
        ]
    }

    constructor() {
    }

    callModal() {
        alert("Modal");
    }
}
