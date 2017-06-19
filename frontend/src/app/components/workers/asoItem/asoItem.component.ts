import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalValidators } from '../../globalValidators';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'asoItemComponent',
    templateUrl: 'asoItem.template.html',
    styleUrls: ['./asoItem.component.scss'],
})
export class AsoItemComponent {
    myForm: FormGroup;
    
    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    constructor(private fb: FormBuilder) {
       this.myForm = this.fb.group({

        })
    }
}