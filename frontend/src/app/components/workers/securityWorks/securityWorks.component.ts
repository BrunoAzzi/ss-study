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
    submited: boolean = false;
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
        { value: 'suplente', viewValue: 'Membro Suplente' },
        { value: 'efetivo', viewValue: 'Membro Efetivo' },
        { value: 'presidente', viewValue: 'Presidente' },
        { value: 'vice', viewValue: 'Vice Presidente' },
        { value: 'secretario', viewValue: 'Secretário' },
    ];
    selectedCipaLabor: string = '';

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

    saveSecurityForm(safetyCard) {
        this.submited = true;
        if (this.securityForm.valid) {
            safetyCard.close();
        }
    }

}
