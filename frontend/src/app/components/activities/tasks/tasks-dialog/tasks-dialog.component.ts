import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tasks-dialog',
    templateUrl: 'tasks-dialog.template.html',
    styleUrls: ['./tasks-dialog.component.scss']
})

export class TasksDialogComponent implements OnInit {

    title: string

    ngOnInit() {
        this.title = "NOVA TAREFA";
    }
   
}