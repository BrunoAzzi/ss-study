import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {GlobalValidators} from '../../globalValidators';
import { IMyDpOptions } from 'mydatepicker';


@Component({
    selector: 'healthComponent',
    templateUrl: 'health.template.html',
    styleUrls: ['./health.component.scss'],
})
export class HealthComponent {
    myForm: FormGroup;
    showAso: boolean;
    itemSelected: boolean = false;
    asoList:Array<Object>[]=[];

     myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            bloodTypes: [''],
            asoTypes: [''],
            // allergies: new FormControl('',GlobalValidators.onlytext),
            allergies: new FormControl('', Validators.compose([Validators.required, GlobalValidators.onlytext])),
            dateHealth: null,
            recyclingPriorities: [''],
        })
    }

    bloodTypes = [
        {value: 0, viewValue: 'A+'},
        {value: 1, viewValue: 'A-'},
        {value: 2, viewValue: 'B+'},
        {value: 3, viewValue: 'B-'},
        {value: 4, viewValue: 'AB+'},
        {value: 5, viewValue: 'AB-'},
        {value: 6, viewValue: 'O+'},
        {value: 7, viewValue: 'O-'},
    ];

    asoTypes = [
        {value: 0, viewValue: 'Admissional'},
        {value: 1, viewValue: 'Demissional'},
        {value: 2, viewValue: 'Periódico'},
        {value: 3, viewValue: 'Mudança de Função'},
        {value: 4, viewValue: 'Retorno ao Trabalho'},
    ];



    addAso() {
        this.asoList.push(this.asoTypes);
    }

}

