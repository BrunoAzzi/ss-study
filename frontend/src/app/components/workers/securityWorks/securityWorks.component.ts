import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
    selector: 'security-works',
    templateUrl: 'securityWorks.template.html',
    styleUrls: ['./securityWorks.component.scss'],
})
export class SecurityWorksComponent {
    securityForm: FormGroup;
    submitted: boolean = false;
    invalidDate: boolean = true;

    constructor(private fb: FormBuilder) {
        this.securityForm = this.fb.group({
            brigadistas: new FormControl('', Validators.required),
            cipeiros: new FormControl('', Validators.required),
            laborsInCipa: new FormControl('', Validators.required),
        })
    }

    brigadistas = [
        { value: 0, viewValue: 'Sim' },
        { value: 1, viewValue: 'Não' },
    ];

    selectedBrigadista: number = 1;

    cipeiros = [
        { value: 0, viewValue: 'Sim' },
        { value: 1, viewValue: 'Não' },
    ];

    selectedCipeiro: number = 1;


    laborsInCipa = [
        { value: 0, viewValue: 'Membro Suplente' },
        { value: 1, viewValue: 'Membro Efetivo' },
        { value: 2, viewValue: 'Presidente' },
        { value: 3, viewValue: 'Vice Presidente' },
        { value: 4, viewValue: 'Secretário' },
    ];

    selectedCipaLabor: number = 5;

    cipeiroChange(deviceValue, dateRange) {
        if (deviceValue === 0) {
            this.securityForm.controls.laborsInCipa.enable();
            this.securityForm.controls.brigadistas.enable();
            dateRange.enable();
        } else {
            this.securityForm.controls.laborsInCipa.disable();
            this.securityForm.controls.brigadistas.disable();
            dateRange.disable();
        }
    }

    saveSecurityForm(safetyCard, dateRange) {
        this.submitted = true;
        const date = dateRange.getDate();
        this.invalidDate = date === '' || date === null;

        if (this.securityForm.valid && this.selectedCipeiro === 0 && !this.invalidDate) {
            safetyCard.close();
        }
    }

}
