import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';

import { Company } from './../../models/company.model';
import { SafetyCardComponent } from './../../components/common/safety-card/safety-card.component';

@Component({
    selector: 'companies',
    templateUrl: 'companies.template.html',
    styleUrls: ['./companies.component.scss'],
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

	ngOnInit() {
		this.elements = [this.companyDetails, this.responsableData, this.responsableSstData, this.responsableContactData, this.additionalInformation];
        this.closeAll();
        
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

    closeAll() {
        this.elements.forEach(e => e.close());
    }

}
