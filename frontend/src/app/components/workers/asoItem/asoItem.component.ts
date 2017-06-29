import { Component, Input, Output, EventEmitter, Inject, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalValidators } from '../../globalValidators';
import { IMyDpOptions } from 'mydatepicker';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { MomentModule} from 'angular2-moment';

@Component({
    selector: 'asoItemComponent',
    templateUrl: 'asoItem.template.html',
    styleUrls: ['./asoItem.component.scss'],
})
export class AsoItemComponent {
    asoForm: FormGroup;
    @Input() itemSelected: number;
    @Input() itemName: String;
    @Input() testeBool: boolean;
    @Output() removed = new EventEmitter();
    myDate : Date;
    asoItemsList = {
                dateExe: undefined,
                isAble:undefined,
                dateChange:undefined,
            };

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    constructor(private fb: FormBuilder, public dialog: MdDialog) {
        this.asoForm = this.fb.group({
           dateExe : new FormControl(''),
           isAble : new FormControl(''),
           dateChange : new FormControl(''),
        });
        
        this.testeBool;
    }

    openDialog() {
        let dialogRef = this.dialog.open(ConfirmationDialogOverview);
        dialogRef.afterClosed().subscribe(result => {
            if (result === "Sim") { this.removeMyself() }
        });
    }

    removeMyself() {
        this.removed.emit(this);
    }
    
    teste(){
        // this.asoForm.valid 
        console.log("AKI");
    }
}



@Component({
    selector: 'confirmationDialog',
    templateUrl: 'confirmationDialog.template.html',
})
export class ConfirmationDialogOverview {
    constructor(public dialogRef: MdDialogRef<ConfirmationDialogOverview>) {

    }
}









