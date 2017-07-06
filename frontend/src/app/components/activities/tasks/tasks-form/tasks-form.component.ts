import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

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

    fControl = new FormControl();
    filteredOptions: Observable<User[]>;

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
        this.filteredOptions = this.fControl.valueChanges
         .startWith(null)
         .map(user => user && typeof user === 'object' ? user.name : user)
         .map(name => name ? this.filter(name) : this.users.slice());
    }

    filter(name: string): User[] {
      return this.users.filter(user => new RegExp(`^${name}`, 'gi').test(user.name)); 
   }

   displayFn(user: User): any {
      return user ? user.name : user;
   }

    sendData() {
        this.save.emit(this.task);
    }
   
}