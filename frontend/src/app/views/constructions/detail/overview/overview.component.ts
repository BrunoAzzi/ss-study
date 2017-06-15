import { ConstructionsService } from './../../../../services/constructions.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'overview',
    templateUrl: 'overview.template.html',
    styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

    lastAlerts = [
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '13:50' },
        { text: 'lorem ipsum dolor |', icon: 'assets/workers.png', time: '14:50' },
        { text: 'Entrada de pessoa não autorizada |', icon: 'assets/epis.png', time: '11:10' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '12:50' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '13:40' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' },
        { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' },
    ]
    forthcomingMaturities = [
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
        { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png' },
        { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png' },
    ]
    forthcomingTrainings = [
        { text: 'Prevenção de acidentes com produtos químicos '},
        { text: 'Lorem ipsum dolor sit '},
        { text: 'Prevenção de acidentes com produtos químicos '},
        { text: 'Lorem ipsum dolor sit '},
        { text: 'Prevenção de acidentes com produtos químicos '},
        { text: 'Lorem ipsum dolor sit '},
    ]
    tasks = [
        { text: 'Refazer a proteção coletiva do andar 3 - Torre 2 '},
        { text: 'Nome de outra tarefa '},
        { text: 'Nome de outra outra tarefa '},
    ]

    constructor(public service: ConstructionsService) {}

    ngOnInit() { }
}