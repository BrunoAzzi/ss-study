import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMyDpOptions } from 'mydatepicker';
import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model';

@Component({
    selector: 'tasks-form',
    templateUrl: 'tasks-form.template.html',
    styleUrls: ['./tasks-form.component.scss']
})

export class TasksFormComponent {

    @Input() task: Task
    @Input() users: Array<User>
    @Output() save: EventEmitter<Task> = new EventEmitter();

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

    ngOnInit() {
        //console.log(this.task);
        //console.log(this.users);
    }

    sendData() {
        this.save.emit(this.task);
    }
   
}