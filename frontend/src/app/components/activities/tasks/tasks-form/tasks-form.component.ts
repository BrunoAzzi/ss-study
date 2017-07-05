import { Component } from '@angular/core';

import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'tasks-form',
    templateUrl: 'tasks-form.template.html',
    styleUrls: ['./tasks-form.component.scss']
})

export class TasksFormComponent {

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: {
            1: 'Jan',
            2: 'Fev',
            3: 'Mar',
            4: 'Abr',
            5: 'Mai',
            6: 'Jun',
            7: 'Jul',
            8: 'Ago',
            9: 'Set',
            10: 'Out',
            11: 'Nov',
            12: 'Dez'
        },
        todayBtnTxt: 'Hoje'
    };
   
}