import { Component, OnInit, OnChanges, EventEmitter, Output, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Company } from './../../../models/company.model';
import { Cnae } from './../../../models/cnae.model';
import { CompanyService } from './../../../services/company.service';

@Component({
    selector: 'company-details',
    templateUrl: 'company-details.template.html',
    styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent implements OnInit, OnChanges {

    @Input() company: Company;
    @Output() saved : EventEmitter<Company> = new EventEmitter()

    cnaeMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/];
    cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/];

    addressStreet: string
    cnaeCode: string
    cnaeDescription: string
    logo: any

    constructor(private service: CompanyService) { }

    ngOnInit() {
        this.cnaeCode = ''
    }

    ngOnChanges() {
        if(this.company && this.company.cnae) {            
            this.cnaeCode = this.company.cnae.code;
            this.cnaeDescription = this.company.cnae.description;
            this.addressStreet = this.company.addressStreet;
        }
    }

    save(f: NgForm) {
        const company = Object.assign(
            new Company(),
            this.company
        )
        this.saved.emit(company);
    }

    onSelectFile(file) {                 
        const formData = new FormData();
        formData.append('file', file);        

        this.service.updateCompanyLogo(this.company, formData)
        .subscribe(
            (response) => {
                
            }
        );
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
