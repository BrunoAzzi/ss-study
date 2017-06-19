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
    selectedItem: boolean = false;
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

    recyclingPriorities = [
        {value: 0, viewValue: 'Cada 1 Mês'},
        {value: 1, viewValue: 'Cada 2 Meses'},
        {value: 2, viewValue: 'Cada 3 Meses'},
        {value: 3, viewValue: 'Cada 4 Meses'},
        {value: 4, viewValue: 'Cada 5 Meses'},
        {value: 5, viewValue: 'Cada 6 Meses'},
        {value: 6, viewValue: 'Cada 7 Meses'},
        {value: 7, viewValue: 'Cada 8 Meses'},
        {value: 8, viewValue: 'Cada 9 Meses'},
        {value: 9, viewValue: 'Cada 10 Meses'},
        {value: 10, viewValue: 'Cada 11 Meses'},
        {value: 11, viewValue: 'Cada 12 Meses'},
    ]

    addAso() {
        this.asoList.push(this.asoTypes);
       
    }

    addTypeOfAso(){
         this.selectedItem = this.selectedItem = true;
    }
}

