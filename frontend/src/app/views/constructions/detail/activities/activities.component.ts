import { Component, ViewChild} from '@angular/core';

@Component({
    selector: 'activities',
    templateUrl: 'activities.template.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
    @ViewChild('tabGroup') tabGroup;


    addTask() {
        console.log("Adicionar tarefa");
    }

}
