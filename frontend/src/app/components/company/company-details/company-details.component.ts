import { Component, OnChanges, EventEmitter, Output, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Company } from './../../../models/company.model';
import { Cnae } from './../../../models/cnae.model';
import { CompanyService } from './../../../services/company.service';

@Component({
    selector: 'company-details',
    templateUrl: 'company-details.template.html',
    styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent {

    @Input() company: Company;
    @Output() saved: EventEmitter<Company> = new EventEmitter();

    cnaeMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/];
    cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    constructor(private service: CompanyService) {}

    save() {
        const company = Object.assign(
            new Company(),
            this.company
        );
        this.saved.emit(company);
    }

    onSelectFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        this.company.logoForm = formData;

        // this.service.updateCompanyLogo(this.company, formData)
        // .subscribe(
        //     response => {
        //         console.log(response);
        //     }
        // );
    }

    onCepSearch(data) {
        this.company.cep = data.cep;
        this.company.addressStreet = data.street + ' , ' + data.neighborhood + ' , ' + data.city + ' / ' + data.state;
    }

    onCnaeSearch(data) {
        if (data) {
            this.company.cnae = new Cnae().initializeWithJson(data);
        }
    }

}
