import { Component, ViewChild} from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'emotional-panel',
    templateUrl: 'emotional-panel.template.html',
    styleUrls: ['./emotional-panel.component.scss']
})
export class EmotionalPanelComponent {
    @ViewChild('tabGroup') tabGroup;

    canvas: any;
    ctx: any;

    public showPopup() {

    };

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    onSelectChange = ($event: any): void => {
        this.canvas = document.getElementById('cnvs');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }
}
