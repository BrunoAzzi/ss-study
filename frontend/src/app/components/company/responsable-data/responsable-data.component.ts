import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Company } from './../../../models/company.model';

@Component({
    selector: 'responsable-data',
    templateUrl: 'responsable-data.template.html',
    styleUrls: ['./responsable-data.component.scss']
})

export class ResponsableDataComponent {

    @Input() company: Company;
    @Output() saved : EventEmitter<Company> = new EventEmitter()

    phoneFaxMask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor() {
    }
}
