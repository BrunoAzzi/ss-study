import { Cookie } from 'ng2-cookies/ng2-cookies';
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
        
    public sessionSrtg : any
    public tasks : Array<any> = []    

    public taskLists : Array<any> = []
    private allTasks : Array<any> = []
    
    private taskSub : any
    private userSub : any    

    dialogConfig = {
        data: {
            task: new Task(),
            currentUser : new User(),
            users: new Array<User>()
        }
    }

    constructor(public dialog: MdDialog, public taskService: TasksService, public userService: UserService, public sessionsService: SessionsService) { }

    ngOnInit() {
        this.sessionSrtg = this.sessionsService.getCurrent() || new User();        
        this.taskSub = this.taskService.getTaskList().subscribe((tasks) => {
            this.tasks = tasks
        })
        this.userSub = this.userService.getUsers().subscribe((users) => {            
            users.forEach(element => {
                let user = new User().initializeWithJSON(element);
                this.dialogConfig.data.users.push(user)
            });
        })
        if(this.sessionSrtg) {            
            this.dialogConfig.data.currentUser = new User().initializeWithJSON(this.sessionSrtg);
        }

        this.taskSub = this.taskService.getTaskList().subscribe((tasks) => {
            this.taskLists = this.mapTasks(tasks);
            this.allTasks = this.taskLists;
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

    checkTask(_task: Task) {
        //TODO: Put to check task
    }

    changeTaskFilter(_filters: any) {
        var filteredList = [];

        this.allTasks.forEach(list => {
            filteredList.push(
                {   group: list.group, 
                    tasks: list.tasks.filter(task => {
                        return (
                            (_filters.personal && task.responsible.id == this.dialogConfig.data.currentUser.id) ||
                            (_filters.team && !task.checked) ||
                            (_filters.history && task.checked) || 
                            !(_filters.personal || _filters.team || _filters.history) 
                        )
                    }) 
                });
        });

        this.taskLists = filteredList;
    }

    changeOccurrenceFilter(_filters: any) {
        //TODO: Filters of Occurrence
    }

    private mapTasks(_tasks: Array<Task>): Array<any> {
        var list = [];

        var late = _tasks.filter(task => task.getStatus() === "late");
        if (late.length > 0) list.push({ group: "Tarefas Atrasadas", tasks: late});

        var today = _tasks.filter(task => task.isToday() == true);
        if (today.length > 0) list.push({ group: "Hoje", tasks: today});

        var others = _tasks.filter(task => task.getStatus() != "late" && task.isToday() == false);
        if (others.length > 0) list.push({ group: "Próximas", tasks: others});

        return list;
    }

    private mapOccurences(_occcurrences: Array<any>): Array<any> {
        var list = [];

        var today = _occcurrences.filter(occurrence => occurrence.isToday() == true);
        if (today.length > 0) list.push({ group: "Hoje", occurrences: today});

        var others = _occcurrences.filter(occurrence => occurrence.isToday() == false);
        if (others.length > 0) list.push({ group: "Dias Anteriores", occurrences: others});

        return list;
    }
}
