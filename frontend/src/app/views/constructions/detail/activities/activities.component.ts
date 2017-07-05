import { Component, ViewChild} from '@angular/core';
import { MdDialog} from '@angular/material';

import { TasksDialogComponent } from './../../../../components/activities/tasks/tasks-dialog/tasks-dialog.component'

@Component({
    selector: 'activities',
    templateUrl: 'activities.template.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
    @ViewChild('tabGroup') tabGroup;

    constructor(public dialog: MdDialog) { }

    addTask() {        
        if(this.tabGroup.selectedIndex === 1) {
            let dialogRef = this.dialog.open(TasksDialogComponent);
        }
    }

}
