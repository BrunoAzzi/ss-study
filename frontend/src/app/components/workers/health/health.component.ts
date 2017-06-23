import { AsoItemComponent } from './../asoItem/asoItem.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalValidators } from '../../globalValidators';
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'healthComponent',
    templateUrl: 'health.template.html',
    styleUrls: ['./health.component.scss'],
})
export class HealthComponent {
    myForm: FormGroup;
    asoList: Array<any> = [];
    errorMsg: String = undefined;
    canAddNew: Boolean = true;
    allergies: '';
    diseases: '';

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
        })
    }

    bloodTypes = [
        { value: 0, viewValue: 'A+' },
        { value: 1, viewValue: 'A-' },
        { value: 2, viewValue: 'B+' },
        { value: 3, viewValue: 'B-' },
        { value: 4, viewValue: 'AB+' },
        { value: 5, viewValue: 'AB-' },
        { value: 6, viewValue: 'O+' },
        { value: 7, viewValue: 'O-' },
        { value: 8, viewValue: '' },
    ];

    asoTypes = [
        { value: 0, viewValue: 'Admissional', name: "Data Periódico" },
        { value: 1, viewValue: 'Demissional', name: "Data Demissão" },
        { value: 2, viewValue: 'Periódico', name: "Proxímo Exame" },
        { value: 3, viewValue: 'Mudança de Função', name: "Data Periódico" },
        { value: 4, viewValue: 'Retorno ao Trabalho', name: "Data Periódico" },
    ];

    addAso() {
        if (this.canAddNew) {
            let json = {
                selected: undefined,
                name: undefined
            };
            this.asoList.push(json);
        }
    }
    removeAsoItem(aso) {
        //Call modal to cofirm
        let index = this.asoList.indexOf(aso);
        if (index > -1) this.asoList.splice(index, 1);
        this.checkAsoSelected();
    }

    changeSelected(aso, value) {
        aso.selected = value.value;
        aso.name = this.asoTypes[value.value].name;
        this.checkAsoSelected();
    }

    checkAsoSelected() {
        let countAdm = 0;
        let countDem = 0;
        for (var index = 0; index < this.asoList.length; index++) {
            if (this.asoList[index].selected == 0) { countAdm += 1; }
            else if (this.asoList[index].selected == 1) { countDem += 1; }
        }
        if (countAdm != 1 && countAdm > countDem + 1) {
            this.errorMsg = "Para adicionar um novo aso do tipo admissional é necessário adicionar um novo aso demissional";
            this.canAddNew = false;
        } else if (countDem > countAdm) {
            this.errorMsg = "Para adicionar um novo aso do tipo demissional é necessário adicionar um aso admissional";
            this.canAddNew = false;
        } else {
            this.errorMsg = undefined;
            this.canAddNew = true;
        }
    }



}

