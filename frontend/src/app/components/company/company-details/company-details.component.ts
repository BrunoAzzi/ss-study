import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';

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

    cep: string
    address: string
    cnaeCode: string
    cnaeDescription: string
    cnae: Cnae    

    constructor() { }

    save(f) {
        
    }

    //noinspection JSMethodCanBeStatic
    onCepSearch(f, data) {
        const mappedData = {            
            address: data.street + ' , ' + data.neighborhood + ' , ' + data.city + ' / ' + data.state            
        };
        f.setValue({...f.value, ...mappedData});
    }

    onCnaeSearch(data) {
        if(data) {
            this.cnae = new Cnae(data.id, data.code, data.description);
            this.cnaeDescription = data.description;
        } else {
            this.cnaeDescription = "";
        }
    }

}
