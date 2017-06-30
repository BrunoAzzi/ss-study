import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';

import { Company } from './../../../models/company.model';

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

    cep: string
    address: string

    constructor() { }

    save() {
        
    }

    //noinspection JSMethodCanBeStatic
    onCepSearch(f, data) {
        const mappedData = {            
            address: data.street + ' , ' + data.neighborhood + ' , ' + data.city + ' / ' + data.state 
        };
        f.setValue({...f.value, ...mappedData});
    }

}
