import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
    selector: 'security-works',
    templateUrl: 'securityWorks.template.html',
    styleUrls: ['./securityWorks.component.scss'],
})
export class SecurityWorksComponent {
    myForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({


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

    selectedCipaLabor: boolean = false;

    laborsInCipa = [
        { value: 'suplente', viewValue: 'Membro Suplente' },
        { value: 'efetivo', viewValue: 'Membro Efetivo' },
        { value: 'presidente', viewValue: 'Presidente' },
        { value: 'vice', viewValue: 'Vice Presidente' },
        { value: 'secretario', viewValue: 'Secretário' },
    ];

    saveSecurityWorker(safetyCard) {
        if (this.myForm.valid) {
            safetyCard.close();
        }
    }

}
