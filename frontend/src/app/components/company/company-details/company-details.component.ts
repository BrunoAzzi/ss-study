import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Company } from './../../../models/company.model';
import { Cnae } from './../../../models/cnae.model';

@Component({
    selector: 'company-details',
    templateUrl: 'company-details.template.html',
    styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent {

    @Input() company: Company;
    @Output() saved : EventEmitter<Company> = new EventEmitter()

    cnaeMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/];
    cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/];

    addressStreet: string
    cnaeCode: string
    cnaeDescription: string

    constructor() { }

    save(f: NgForm) {
        const company = Object.assign(
            new Company(),
            this.company
        )
        this.saved.emit(company);
    }

    onCepSearch(data) {
        this.company.cep = data.cep;
        this.addressStreet = data.street + ' , ' + data.neighborhood + ' , ' + data.city + ' / ' + data.state 
        this.company.addressStreet = this.addressStreet
    }

    onCnaeSearch(data) {
        if(data) {
            this.company.cnae = new Cnae(data.id, data.code, data.description);
            this.cnaeDescription = data.description;
        } else {
            this.cnaeDescription = "";
        }
    }

}
