import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'tasks-list',
    templateUrl: 'tasks-list.template.html',
    styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
    selectedFilter: string = "personal";
    @Input() tasks = [];
    @Output() checkTask : EventEmitter<any> = new EventEmitter();
    @Output() changeTaskFilter : EventEmitter<string> = new EventEmitter();
    @Output() saveTask : EventEmitter<any> = new EventEmitter();

    taskList = [
        { group: 'Tarefas Atrasadas', tasks: [
            { date: '03/07/2017', title: 'Criar proteção coletiva', status: 'late'},
            { date: '03/07/2017', title: 'Criar proteção coletiva', status: 'late'},
        ]},
        { group: 'Hoje', tasks: [
            { date: '04/07/2017', title: 'Criar proteção coletiva', status: 'ending' },
            { date: '04/07/2017', title: 'Criar proteção coletiva', status: 'ending' },
            { date: '04/07/2017', title: 'Criar proteção coletiva', status: 'in-time' },
        ]},
        { group: 'Próximas', tasks: [
            { date: '08/07/2017', title: 'Criar proteção coletiva', status: 'ending' },
            { date: '13/07/2017', title: 'Criar proteção coletiva', status: 'in-time' },
            { date: '15/07/2017', title: 'Criar proteção coletiva', status: 'in-time' },
            { date: '16/07/2017', title: 'Criar proteção coletiva', status: 'in-time' },
            { date: '16/07/2017', title: 'Criar proteção coletiva', status: 'in-time' },
            { date: '20/07/2017', title: 'Criar proteção coletiva', status: 'in-time' },
        ]},
    ]

    check(_task: any) {
        _task.checked = true;
        this.checkTask.emit(_task);
    }

    save(_task: any) {
        console.log(_task);
    }

    toggleActiveFilter(_filter: string) {
        this.selectedFilter = _filter;
        this.changeTaskFilter.emit(_filter);
    }
}
