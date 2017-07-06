import { Component, ViewChild} from '@angular/core';
import { MdDialog} from '@angular/material';

import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model'
import { TasksService } from './../../../../services/tasks.service';
import { UserService } from './../../../../services/user.service';
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
    private userSub : any

    dialogConfig = {
        data: {
            task: new Task(),
            users: new Array<User>()
        }
    }

    constructor(public dialog: MdDialog, public taskService: TasksService, public userService: UserService) { }

    ngOnInit() {
        this.taskSub = this.taskService.getTaskList().subscribe((tasks) => {
            this.tasks = tasks
        })
        this.userSub = this.userService.getUsers().subscribe((users) => {            
            users.forEach(element => {
                let user = new User().initializeWithJSON(element);
                this.dialogConfig.data.users.push(user)
            });
        })
    }

    ngOnDestroy() {
        this.taskSub.unsubscribe()
        this.userSub.unsubscribe()
    }

    openTaskDialog() {        
        if(this.tabGroup.selectedIndex === 1) {
            let dialogRef = this.dialog.open(TasksDialogComponent, this.dialogConfig);
        }
    }

    checkTask(_task: any) {
        console.log("call update");
    }

    changeTaskFilter(_filter: string) {
        console.log("call list with filter");
    }
}
