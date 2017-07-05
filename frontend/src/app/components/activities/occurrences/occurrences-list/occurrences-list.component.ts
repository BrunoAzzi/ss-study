import { Component, Input } from '@angular/core';

@Component({
    selector: 'occurrences-list',
    templateUrl: 'occurrences-list.template.html',
    styleUrls: ['./occurrences-list.component.scss']
})
export class OccurrencesListComponent {
    @Input() occurrences = [];
    selectedFilters = ['accident', 'incident']

    occurrencesList = [
        { group: 'Hoje', occurrences: [
            { date: '04/07/2017', title: 'Criar proteção coletiva', type: 'non-compliance' },
            { date: '04/07/2017', title: 'Criar proteção coletiva', type: 'incident' },
            { date: '04/07/2017', title: 'Criar proteção coletiva', type: 'incident' },
        ]},
        { group: 'Dias Anteriores', occurrences: [
            { date: '08/07/2017', title: 'Criar proteção coletiva', type: 'accident' },
            { date: '13/07/2017', title: 'Criar proteção coletiva', type: 'good-habits' },
            { date: '15/07/2017', title: 'Criar proteção coletiva', type: 'good-habits' },
            { date: '16/07/2017', title: 'Criar proteção coletiva', type: 'good-habits' },
            { date: '16/07/2017', title: 'Criar proteção coletiva', type: 'accident' },
            { date: '20/07/2017', title: 'Criar proteção coletiva', type: 'accident' },
        ]},
    ]

    toggleActiveFilter(_filter: string) {
        var index = this.selectedFilters.indexOf(_filter);
        if ( index == -1) {
            this.selectedFilters.push(_filter);
        } else {
            this.selectedFilters.splice(index, 1);
        }
    }
}
