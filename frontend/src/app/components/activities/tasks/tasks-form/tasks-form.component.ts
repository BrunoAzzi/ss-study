import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { DateAdapter } from '@angular/material';

import * as Moment from "moment";
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

    constructor(private dateAdapter: DateAdapter<Date>) {
        this.dateAdapter.setLocale('pt-br');
    }

    ngOnInit() {        
        this.filteredOptions = this.fControl.valueChanges
         .startWith(null)
         .map(user => user && typeof user === 'object' ? user.name : user)
         .map(name => name ? this.filter(name) : this.users.slice());
        this.deadline = this.task.deadline ? Moment(this.task.deadline).format("MM/DD/YYYY") : "";
        console.log(this.deadline);
        console.log(this.task.deadline);
    }

    filter(name: string): User[] {
      return this.users.filter(user => new RegExp(`^${name}`, 'gi').test(user.name)); 
    }

    displayFn(user: User): any {
        return user ? user.name : user;
    }

    setValidityDeadline(date) {
        if(date) {
            let tmpDate = Moment(date).format("DD/MM/YYYY");
            console.log(date);
            console.log(tmpDate);
            let formattedData = tmpDate.substr(tmpDate.length - 4);
                formattedData += "-";
                formattedData += tmpDate.substr(3, 2);
                formattedData += "-";
                formattedData += tmpDate.substr(0, 2);        
            this.task.deadline = formattedData + " 23:59:59";
        }
    }

    bindAttachments(_attachmentFiles: Array<AttachmentFile>) {        
        this.attachmentFiles = _attachmentFiles;
        this.sendData();
    }

    sendData() {
        this.save.emit(this.task);
        this.bindFiles.emit(this.attachmentFiles);
    }
   
}