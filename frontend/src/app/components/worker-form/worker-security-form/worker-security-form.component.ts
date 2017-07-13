import { Worker } from '../../../models/worker.model';
import { Component, Input, EventEmitter, Output, ViewChild, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SecurityWorksService } from '../../../services/workers/securityWorks.service';
import { DateRangeComponent } from '../../../components/common/date-range/date-range.component';

@Component({
    selector:    'security-works-form',
    templateUrl: './worker-security-form.template.html',
    styleUrls:   ['./worker-security-form.component.scss'],
    providers:   [SecurityWorksService]
})

export class SecurityWorksComponent {
    @Output() saved: EventEmitter<any> = new EventEmitter();
    @Input() cpf: string;
    @Input() worker: Worker;
              securityForm: FormGroup;
              submitted                = false;
              invalidDate              = true;

    @ViewChild('dateRange') DateRange: DateRangeComponent;
    @ViewChild('setDateRange') setDateRang: DateRangeComponent;

    constructor(private fb: FormBuilder, private secService: SecurityWorksService) {
        this.securityForm = this.fb.group({
            brigadistas:  new FormControl('', Validators.required),
            cipeiros:     new FormControl('', Validators.required),
            laborsInCipa: new FormControl('', Validators.required)
        });
    }

    selectedBrigadista: number;
    selectedCipeiro = 2;
    selectedCipaLabor: number;

    brigadistas = [
        { value: true, viewValue: 'Sim' },
        { value: false, viewValue: 'Não' },
    ];

    cipeiros = [
        { value: true, viewValue: 'Sim' },
        { value: false, viewValue: 'Não' },
    ];

    laborsInCipa = [
        { value: "1", viewValue: 'Membro Suplente' },
        { value: "2", viewValue: 'Membro Efetivo' },
        { value: "3", viewValue: 'Presidente' },
        { value: "4", viewValue: 'Vice Presidente' },
        { value: "5", viewValue: 'Secretário' },
    ];

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
