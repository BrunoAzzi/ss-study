import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { Task } from './../../../../models/task.model';

@Component({
    selector: 'tasks-attachment-files',
    templateUrl: 'tasks-attachment-files.template.html',
    styleUrls: ['./tasks-attachment-files.component.scss']
})

export class TasksAttachmentFiles {

    @Input() task: Task
    @Output() save: EventEmitter<Task> = new EventEmitter();
    
    sendData() {
        this.save.emit(this.task);
    }
}