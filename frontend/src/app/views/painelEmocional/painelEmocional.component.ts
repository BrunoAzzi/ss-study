import { Component, ViewChild} from '@angular/core';

@Component({
    selector: 'painelEmocional',
    templateUrl: 'painelEmocional.template.html',
    styleUrls: ['./painelEmocional.component.scss']
})
export class PainelEmocionalComponent {
    @ViewChild('tabGroup') tabGroup;

    canvas: any;
    ctx: any;
    // private width: number = 800;
    // private height: number = 600;

    public showPopup() {

    };

    onSelectChange = ($event: any): void => {

        this.canvas = document.getElementById('cnvs');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");



        console.log(this.canvas);
        console.log('event => ', $event);
        console.log('index => ', $event.index);
    }


}
