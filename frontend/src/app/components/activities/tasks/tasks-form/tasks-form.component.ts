import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

import { MomentModule } from 'angular2-moment';
import { Observable } from 'rxjs/Observable';

import { IMyDpOptions } from 'mydatepicker';
import { AttachmentFile } from './../../../../models/attachmentFile.model';
import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model';

@Component({
    selector: 'tasks-form',
    templateUrl: 'tasks-form.template.html',
    styleUrls: ['./tasks-form.component.scss']
})

export class TasksFormComponent implements OnInit {

    @Input() task: Task
    @Input() users: Array<User>
    @Output() save: EventEmitter<Task> = new EventEmitter();
    @Output() bindFiles: EventEmitter<any> = new EventEmitter();

    attachmentFiles: Array<AttachmentFile> = []
    deadline : any
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
        this.deadline = this.task.deadline;
    }

    filter(name: string): User[] {
      return this.users.filter(user => new RegExp(`^${name}`, 'gi').test(user.name)); 
    }

    displayFn(user: User): any {
        return user ? user.name : user;
    }

    setValidityDeadline(event) {
        if(event) {
            let formattedData = event.formatted.substr(event.formatted.length - 4);
                formattedData += "-";
                formattedData += event.formatted.substr(3, 2);
                formattedData += "-";
                formattedData += event.formatted.substr(0, 2);        
            this.task.deadline = formattedData;
        }
    }

    bindAttachments(_attachmentFiles: Array<AttachmentFile>) {
        console.log("FILES ON FORM", _attachmentFiles);
        this.attachmentFiles = _attachmentFiles;
    }

    sendData() {
        this.save.emit(this.task);
        this.bindFiles.emit(this.attachmentFiles);
    }
   
}