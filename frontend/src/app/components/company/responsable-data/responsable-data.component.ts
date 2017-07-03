import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Company } from './../../../models/company.model';
import { CompanyContact } from './../../../models/company-contact.model';

@Component({
    selector: 'responsable-data',
    templateUrl: 'responsable-data.template.html',
    styleUrls: ['./responsable-data.component.scss']
})

export class ResponsableDataComponent {

    @Input() company: Company;
    @Input() responsableType: string
    @Output() saved : EventEmitter<Company> = new EventEmitter()

    companyContact: CompanyContact

    phoneFaxMask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor() {}

    ngOnInit() {
        this.companyContact = new CompanyContact();
    }

    save(f: NgForm) {
        
        if(this.responsableType === "responsableData") {
            this.company.responsibleCompany = this.companyContact
        } else if(this.responsableType === "responsableSstData") {
            this.company.responsibleSST = this.companyContact
        } else if(this.responsableType === "responsableContactData") {
            this.company.contact = this.companyContact
        }

        const company = Object.assign(
            new Company(),
            this.company
        )        
        this.saved.emit(company);
    }
}
