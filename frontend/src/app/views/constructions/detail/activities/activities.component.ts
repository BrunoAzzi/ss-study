import { TasksService } from './../../../../services/tasks.service';
import { Component, ViewChild} from '@angular/core';

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
    
	constructor(public service: TasksService) { }

    ngOnInit() {
        this.taskSub = this.service.getTaskList().subscribe((tasks) => {
            this.tasks = tasks
        })
    }

    ngOnDestroy() {
        this.taskSub.unsubscribe()
    }

    addTask() {
        console.log("Adicionar tarefa");
    }

    checkTask(_task: any) {
        console.log("call update");
    }

    changeTaskFilter(_filter: string) {
        console.log("call list with filter");
    }
}
