import { Task } from './../../../../models/task.model';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

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
    
    @Input() taskLists = [];
    @Output() checkTask : EventEmitter<Task> = new EventEmitter();
    @Output() changeTaskFilter : EventEmitter<any> = new EventEmitter();
    @Output() deleteTask : EventEmitter<Task> = new EventEmitter();
    @Output() saveTask : EventEmitter<Task> = new EventEmitter();

    check(_task: Task) {
        _task.checked = true;
        this.checkTask.emit(_task);
    }

    save(_task: Task) {
        console.log(_task);
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
