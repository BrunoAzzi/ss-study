import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model';

@Component({
    selector: 'tasks-dialog',
    templateUrl: 'tasks-dialog.template.html',
    styleUrls: ['./tasks-dialog.component.scss']
})

export class TasksDialogComponent implements OnInit {

    title: string
    task: Task
    users: Array<User>

    constructor(
        public dialogRef: MdDialogRef<TasksDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {
        this.title = this.data.task.id ? this.data.task.description : "NOVA TAREFA";
        this.task = this.data.task.id ? this.data.task : new Task();
        this.users = this.data.users;
    }

    save(_task) {
        this.task = _task;
    }

    saveTask() {
        console.log(this.task);
    }
   
}