import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'overview',
    templateUrl: 'overview.template.html',
    styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

    lastAlerts = [
        { text: 'Equipamento com bateria baixa lorem ipsum dolor ', icon: 'assets/workers.png', time: '13:50' },
        { text: 'lorem ipsum dolor ', icon: 'assets/workers.png', time: '14:50' },
        { text: 'Entrada de pessoa não autorizada ', icon: 'assets/epis.png', time: '11:10' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor ', icon: 'assets/workers.png', time: '12:50' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor ', icon: 'assets/workers.png', time: '13:40' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor ', icon: 'assets/workers.png', time: '22:00' },
    ]

    constructor() { }

    ngOnInit() { }
}