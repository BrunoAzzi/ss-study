import { EmotionalResult } from './../../../../models/emotional-result.model';
import { ConstructionsService } from './../../../../services/constructions.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'overview',
    templateUrl: 'overview.template.html',
    styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

    workers = {
        total: 360,
        results: new EmotionalResult(20, 76, 34, 250, 0)
    }

    lastAlerts = [
        { title: '16/MAR', items: [
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
            { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '22:00' }
        ]},
        { title: '15/MAR', items: [
            { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '13:50' },
            { text: 'lorem ipsum dolor |', icon: 'assets/workers.png', time: '14:50' },
            { text: 'Entrada de pessoa não autorizada |', icon: 'assets/epis.png', time: '11:10' },
            { text: 'Equipamento com bateria baixa lorem ipsum dolor |', icon: 'assets/workers.png', time: '12:50' }
        ]},
    ]

    forthcomingMaturities = [
        { title: '01/ABR', items: [
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' }
        ]},
        { title: '05/ABR', items: [
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Limpeza dos bebedouros ', icon: 'assets/workers.png', display: 'right' },
            { text: 'Ensaios de aterramento elétrico (a cada ano) ', icon: 'assets/workers.png', display: 'right' },
        ]},
    ]
    
    forthcomingTrainings = [
        { title: '12/ABR', items: [
            { text: 'Prevenção de acidentes com produtos químicos '},
            { text: 'Lorem ipsum dolor sit '},
            { text: 'Prevenção de acidentes com produtos químicos '},
            { text: 'Lorem ipsum dolor sit '},
            { text: 'Prevenção de acidentes com produtos químicos '},
            { text: 'Lorem ipsum dolor sit '}
        ]}
    ]

    tasks = [
        { text: 'Refazer a proteção coletiva do andar 3 - Torre 2 '},
        { text: 'Nome de outra tarefa '},
        { text: 'Nome de outra outra tarefa '},
    ]

    constructor(public service: ConstructionsService) {}

    ngOnInit() {
        
    }
}