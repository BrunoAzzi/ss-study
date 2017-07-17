import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'occurrences-list',
    templateUrl: 'occurrences-list.template.html',
    styleUrls: ['./occurrences-list.component.scss']
})
export class OccurrencesListComponent {
    @Input() occurrences = [];
    @Output() changeOccurrencesFilter : EventEmitter<any> = new EventEmitter();

    showSearch = false;

    selectedFilters = {
        accident: false,
        incident: false,
        goodHabits: false,
        nonCompliance: false
    };

    occurrencesList = [
        { group: 'Hoje', occurrences: [
            { date: '04/07/2017', title: 'Criar proteção coletiva', type: 'nonCompliance' },
            { date: '04/07/2017', title: 'Criar proteção coletiva', type: 'incident' },
            { date: '04/07/2017', title: 'Criar proteção coletiva', type: 'incident' },
        ]},
        { group: 'Dias Anteriores', occurrences: [
            { date: '08/07/2017', title: 'Criar proteção coletiva', type: 'accident' },
            { date: '13/07/2017', title: 'Criar proteção coletiva', type: 'goodHabits' },
            { date: '15/07/2017', title: 'Criar proteção coletiva', type: 'goodHabits' },
            { date: '16/07/2017', title: 'Criar proteção coletiva', type: 'goodHabits' },
            { date: '16/07/2017', title: 'Criar proteção coletiva', type: 'accident' },
            { date: '20/07/2017', title: 'Criar proteção coletiva', type: 'accident' },
        ]},
    ]

    toggleSearch() {
        this.showSearch = !this.showSearch;
    }

    toggleActiveFilter(_filter: string) {
        this.selectedFilters = {
            ...this.selectedFilters,
            [_filter]: !this.selectedFilters[_filter]
        }
        this.changeOccurrencesFilter.emit(this.selectedFilters);
    }
}
