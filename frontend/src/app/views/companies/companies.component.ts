import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Company } from './../../models/company.model';
import { SafetyCardComponent } from './../../components/common/safety-card/safety-card.component';
import { CompanyService } from './../../services/company.service';

@Component({
    selector: 'companies',
    templateUrl: 'companies.template.html',
    styleUrls: ['./companies.component.scss'],
    providers: [CompanyService]
})
export class CompaniesComponent {
    @Input() company: Company;


	@ViewChild('companyDetails') companyDetails: SafetyCardComponent;
    @ViewChild('responsableData') responsableData: SafetyCardComponent;
    @ViewChild('responsableSstData') responsableSstData: SafetyCardComponent;
    @ViewChild('responsableContactData') responsableContactData: SafetyCardComponent;
    @ViewChild('additionalInformation') additionalInformation: SafetyCardComponent;

	canvas: any;
	ctx: any;
	// private width: number = 800;
	// private height: number = 600;
	elements: Array<SafetyCardComponent>;

    constructor(public snackBar: MdSnackBar, private service: CompanyService) {}

	ngOnInit() {
		this.elements = [this.companyDetails, this.responsableData, this.responsableSstData, this.responsableContactData, this.additionalInformation];
        this.closeAll();
        
        //TODO retrieve company's information from REST service
        this.company = new Company();
        
        this.companyDetails.open();
	}

    onSelectChange = ($event: any): void => {

		this.canvas = document.getElementById('cnvs');
		// this.canvas.width = this.width;
		// this.canvas.height = this.height;
		// this.canvas.refresh();
		document.body.appendChild(this.canvas);
		this.ctx = this.canvas.getContext("2d");
    }

    onCompanyDetailsSaved(company: Company) {

        this.service.updateCompany(company).subscribe(
            data => {
                this.companyDetails.close();
                this.responsableData.open();
                this.snackBar.open('Dados da empresa atualizados com sucesso!', null, {duration: 3000})
            }, 
            error => {
                if (error.json() && error.json().errors && error.json().errors.length > 0) {
                    console.log(error.json().errors[0].message);
                    console.log('Erro no servidor!');
                }
            }
        );
    }

    onResponsableData(company: Company) {
        
        this.responsableData.close();
        this.responsableSstData.open();
        this.snackBar.open('Dados do responsável pela empresa atualizados com sucesso!', null, {duration: 3000})
    }

    onResponsableSstData(company: Company) {
        
        this.responsableSstData.close();
        this.responsableContactData.open();
        this.snackBar.open('Dados do responsável SST atualizados com sucesso!', null, {duration: 3000})
    }
    onResponsableContactData(company: Company) {
        
        this.responsableContactData.close();
        this.additionalInformation.open();
        this.snackBar.open('Dados do contato atualizados com sucesso!', null, {duration: 3000})
    }

    onAdditionalInformation(company: Company) {
        
        this.service.updateCompany(company).subscribe(
            data => {
                this.additionalInformation.close();
                this.snackBar.open('Informações Adicionais atualizadas com sucesso!', null, {duration: 3000})
            }, 
            error => {
                if (error.json() && error.json().errors && error.json().errors.length > 0) {
                    console.log(error.json().errors[0].message);
                    console.log('Erro no servidor!');
                }
            }
        );
    }

    closeAll() {
        this.elements.forEach(e => e.close());
    }

}
