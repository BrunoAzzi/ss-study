import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Company } from './../../../models/company.model';

@Component({
    selector: 'additional-information',
    templateUrl: 'additional-information.template.html',
    styleUrls: ['./additional-information.component.scss']
})

export class AddInformationComponent {

    @Input() company: Company;
    @Output() saved : EventEmitter<Company> = new EventEmitter()

    constructor() {}

    save(f: NgForm) {
        const company = Object.assign(
            new Company(),
            this.company
        )
        this.saved.emit(company);
    }
}
