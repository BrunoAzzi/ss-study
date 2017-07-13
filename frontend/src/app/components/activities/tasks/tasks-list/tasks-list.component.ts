import { Task } from './../../../../models/task.model';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { TasksDialogComponent } from './../tasks-dialog/tasks-dialog.component';
import { User } from './../../../../models/user.model';

@Component({
    selector: 'tasks-list',
    templateUrl: 'tasks-list.template.html',
    styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
    selectedFilters = {
        personal: false,
        team: false,
        history: false,
    }

    dialogConfig = {
        data: {
            task: new Task(),            
            users: new Array<User>()
        }
    }
    
    @Input() taskLists = [];
    @Input() users : Array<User>;
    @Output() checkTask : EventEmitter<Task> = new EventEmitter();
    @Output() changeTaskFilter : EventEmitter<any> = new EventEmitter();
    @Output() deleteTask : EventEmitter<Task> = new EventEmitter();

    ngOnInit() {
        this.dialogConfig.data.users = this.users;
    }

    check(_task: Task) {
        _task.checked = true;
        this.checkTask.emit(_task);
    }

    constructor ( public dialog: MdDialog ) {}

    save(_task: Task) {
        console.log(_task);
    }

    edit(_task: Task) {
        console.log(_task);
        this.dialogConfig.data.task = _task;
        let dialogRef = this.dialog.open(TasksDialogComponent, this.dialogConfig);
    }

    delete(_task: Task) {
        this.deleteTask.emit(_task);
    }

    toggleActiveFilter(_filter: string) {
        this.selectedFilters = {
            ...this.selectedFilters,
            [_filter]: !this.selectedFilters[_filter]
        }
        this.changeTaskFilter.emit(this.selectedFilters);
    }
}
