import { Worker } from './../../../models/worker.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SecurityWorksService } from "../../../services/workers/securityWorks.service";

@Component({
    selector: 'security-works',
    templateUrl: 'worker-security-form.template.html',
    styleUrls: ['./worker-security-form.component.scss'],
    providers: [SecurityWorksService]
})
export class SecurityWorksComponent {
    @Output() saved: EventEmitter<any> = new EventEmitter()
    @Input() cpf: string;
    @Input() worker : Worker = new Worker();
    securityForm: FormGroup;
    submitted: boolean = false;
    invalidDate: boolean = true;


    constructor(private fb: FormBuilder, private secService: SecurityWorksService) {
        this.securityForm = this.fb.group({
            brigadistas: new FormControl('', Validators.required),
            cipeiros: new FormControl('', Validators.required),
            laborsInCipa: new FormControl('', Validators.required),
        });

    }

    setDatawithCPF(dateRange) {
        this.secService.getSecurityWorker().subscribe(
            (response) => {
                this.selectedCipeiro = response.cipeiro;
                this.selectedCipaLabor = response.laborOnCipa;
                this.selectedBrigadista = response.brigade;
                dateRange.setDateRange(response.termBegin, response.termEnd);
            },
        );
    }

    brigadistas = [
        { value: 1, viewValue: 'Sim' },
        { value: 2, viewValue: 'Não' },
    ];

    selectedBrigadista: number;

    cipeiros = [
        { value: 1, viewValue: 'Sim' },
        { value: 2, viewValue: 'Não' },
    ];

    selectedCipeiro: number = 2;

    laborsInCipa = [
        { value: 1, viewValue: 'Membro Suplente' },
        { value: 2, viewValue: 'Membro Efetivo' },
        { value: 3, viewValue: 'Presidente' },
        { value: 4, viewValue: 'Vice Presidente' },
        { value: 5, viewValue: 'Secretário' },
    ];

    selectedCipaLabor: number;

    cipeiroChange(deviceValue, dateRange) {
        if (deviceValue === 1) {
            this.securityForm.controls.laborsInCipa.enable();
            this.securityForm.controls.brigadistas.enable();
            dateRange.enable();
        } else {
            this.securityForm.controls.laborsInCipa.disable();
            this.securityForm.controls.brigadistas.disable();
            dateRange.disable();
        }
    }
}
