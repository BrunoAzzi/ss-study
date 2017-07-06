import { Component, ViewChild} from '@angular/core';
import { MdDialog} from '@angular/material';

import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model'
import { SessionsService } from './../../../../services/sessions.service'
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

    public taskLists : Array<any> = []
    private allTasks : Array<any> = []
    
    public cookie: any
    private taskSub : any
    private userSub : any
    private cookieSub : any

    dialogConfig = {
        data: {
            task: new Task(),
            currentUser : new User(),
            users: new Array<User>()
        }
    }

    constructor(public dialog: MdDialog, public taskService: TasksService, public userService: UserService, public sessionsService: SessionsService) { }

    ngOnInit() {
        this.cookie = this.sessionsService.getCurrent();   

        // this.taskSub = this.taskService.getTaskList().subscribe((tasks) => {
        //     this.taskLists = this.mapTasks(tasks);
        //     this.allTasks = this.taskLists;
        // })


        var task = new Task()
        task.title = "esse é um teste";
        task.deadline = new Date(2017, 6, 6, 23, 59);
        task.createAt = new Date(2017, 6, 5, 0, 20);

        var tasks = [task];
        this.taskLists = this.mapTasks(tasks);
        this.allTasks = this.taskLists;     

        this.userSub = this.userService.getUsers().subscribe((users) => {            
            users.forEach(element => {
                let user = new User().initializeWithJSON(element);
                this.dialogConfig.data.users.push(user)
            });
        })
        if(this.cookie) {
            this.cookieSub = this.userService.getUserById(this.cookie).subscribe((user) => {
                this.dialogConfig.data.currentUser = user;
            });
        }
    }

    ngOnDestroy() {
        this.taskSub.unsubscribe()
        this.userSub.unsubscribe()
        if(this.cookie) {
            this.cookieSub.unsubscribe()
        }
    }

    openTaskDialog() {        
        if(this.tabGroup.selectedIndex === 1) {
            let dialogRef = this.dialog.open(TasksDialogComponent, this.dialogConfig);
        }
    }

    checkTask(_task: Task) {
        console.log("call update");
    }

    changeTaskFilter(_filters: any) {
        var filteredList = [];

        this.allTasks.forEach(list => {
            filteredList.push(
                {   group: list.group, 
                    tasks: list.tasks.filter(task => {
                        return (
                            (_filters.personal) ||
                            (_filters.team && !task.checked) ||
                            (_filters.history && task.checked) || 
                            !(_filters.personal || _filters.team || _filters.history) 
                        )
                    }) 
                });
        });

        this.taskLists = filteredList;
    }

    private mapTasks(_tasks: Array<Task>): Array<any> {
        var list = [];

        var late = _tasks.filter(task => task.getStatus() === "late");

        if (late.length > 0) {
            list.push({ group: "Tarefas Atrasadas", tasks: late});
        }

        var today = _tasks.filter(task => task.isToday() == true);
        if (today.length > 0) {
            list.push({ group: "Hoje", tasks: today});
        }

        var others = _tasks.filter(task => task.getStatus() != "late" && task.isToday() == false);
        if (others.length > 0) {
            list.push({ group: "Próximas", tasks: others});
        }

        return list;
    }
}
