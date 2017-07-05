import { TasksService } from './../../../../services/tasks.service';
import { Component, ViewChild} from '@angular/core';
import { MdDialog} from '@angular/material';

import { TasksDialogComponent } from './../../../../components/activities/tasks/tasks-dialog/tasks-dialog.component'

@Component({
    selector: 'activities',
    templateUrl: 'activities.template.html',
    styleUrls: ['./activities.component.scss'],
    providers: [TasksService]
})
export class ActivitiesComponent {
    @ViewChild('tabGroup') tabGroup;
    
    public tasks : Array<any> = []
    private taskSub : any 

    constructor(public dialog: MdDialog, public service: TasksService) { }

    ngOnInit() {
        this.taskSub = this.service.getTaskList().subscribe((tasks) => {
            this.tasks = tasks
        })
    }

    ngOnDestroy() {
        this.taskSub.unsubscribe()
    }

    addTask() {        
        if(this.tabGroup.selectedIndex === 1) {
            let dialogRef = this.dialog.open(TasksDialogComponent);
        }
    }

    checkTask(_task: any) {
        console.log("call update");
    }

    changeTaskFilter(_filter: string) {
        console.log("call list with filter");
    }
}
