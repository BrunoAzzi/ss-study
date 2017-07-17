import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Component, ViewChild} from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { OccurrenceService } from './../../../../services/occurrence.service';
import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model'
import { SessionsService } from './../../../../services/sessions.service'
import { TasksService } from './../../../../services/task.service';
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

    public taskLists : Array<any> = []
    private allTasks : Array<any> = []

    public occurrenceLists : Array<any> = []
    private allOccurrences : Array<any> = []
    
    private taskSub : any
    private occurenceSub : any  
    private userSub : any    

    dialogConfig = {
        data: {
            task: new Task(),
            currentUser : new User(),
            users: new Array<User>()
        }
    }

    constructor(public dialog: MdDialog, 
                public taskService: TasksService, 
                public occurrenceService: OccurrenceService,
                public userService: UserService, 
                public sessionsService: SessionsService,
                public snackBar: MdSnackBar) { }

    ngOnInit() {
        this.sessionSrtg = this.sessionsService.getCurrent() || new User();   

        this.userSub = this.userService.getUsers().subscribe((users) => {            
            users.forEach(element => {
                let user = new User().initializeWithJSON(element);
                this.dialogConfig.data.users.push(user)
            });
        })

        if(this.sessionSrtg) {            
            this.dialogConfig.data.currentUser = new User().initializeWithJSON(this.sessionSrtg);
        }

        this.getTaskLists(); 
        this.getOccurrenceLists();
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
        _task.checked = true;
        
        this.taskService.saveTask(_task).subscribe(
                savedTask => {
                    this.snackBar.open('Tarefa feita!', null, { duration: 3000 });                    
                },
                error => {
                    this.handleError(error);
                }
            );
    }

    getOccurrenceLists() {
        this.occurenceSub = this.occurrenceService.getOccurenceList().subscribe((occurrences) => {
            this.allOccurrences = occurrences;
            this.occurrenceLists = this.mapTasks(occurrences);
        })
    }


    getTaskLists() {
        this.taskSub = this.taskService.getTaskList().subscribe((tasks) => {
            this.allTasks = tasks;
            this.taskLists = this.mapTasks(tasks);
        })
    }

    deleteTask(_task: Task) {
        this.taskService.deleteTask(_task.id).subscribe(
                response => {
                    this.snackBar.open('Tarefa excluida com sucesso!', null, { duration: 3000 });
                    this.getTaskLists();
                },
                error => {
                    this.handleError(error);
                }
            );
    }

    changeTaskFilter(_filters: any) {
        var filteredList = [];

        var filteredList = this.allTasks.filter(task => {
                                return (
                                    (_filters.personal && task.responsible.id === this.sessionSrtg.id && !task.checked) ||
                                    (_filters.team && !task.checked) ||
                                    (_filters.history && task.checked) || 
                                    !(_filters.personal || _filters.team || _filters.history) 
                                )
                            })

        this.taskLists = this.mapTasks(filteredList);
    }

    changeOccurrenceFilter(_filters: any) {
        //TODO: Filters of Occurrence
    }

    private mapTasks(_tasks: Array<Task>): Array<any> {
        var list = [];

        var late = _tasks.filter(task => task.getStatus() === "late" && !task.checked);
        if (late.length > 0) list.push({ group: "Tarefas Atrasadas", tasks: late});

        var today = _tasks.filter(task => task.isToday() == true && !task.checked);
        if (today.length > 0) list.push({ group: "Hoje", tasks: today});

        var others = _tasks.filter(task => task.getStatus() != "late" && task.isToday() == false && !task.checked);
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

    private handleError(error) {
        if (error.json() && error.json().errors && error.json().errors.length > 0) {
            this.snackBar.open(error.json().errors[0].message, null, { duration: 3000 });
            console.log(error.json().errors[0].message);
        } else {
            this.snackBar.open('Erro no servidor!', null, { duration: 3000 });
            console.log('Erro no servidor!');
        }
    }
}