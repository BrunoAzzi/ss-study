import { MdDialog, MdDialogRef } from '@angular/material';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:    'workers-aso-item',
    templateUrl: './workers-aso-item.template.html',
    styleUrls:   ['./workers-aso-item.component.scss'],
})

export class AsoItemComponent {
    asoForm: FormGroup;
    @Input() itemSelected: number;
    @Input() itemName: String;
    @Input() testeBool: boolean;
    @Output() removed = new EventEmitter();
    myDate: Date;
    asoItemsList      = {
        dateExe:    undefined,
        isAble:     undefined,
        dateChange: undefined,
    };

    myDatePickerOptions: IMyDpOptions = {
        dateFormat:  'dd/mm/yyyy',
        dayLabels:   { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    constructor(private fb: FormBuilder, public dialog: MdDialog) {
        this.asoForm = this.fb.group({
            dateExe:    new FormControl(''),
            isAble:     new FormControl(''),
            dateChange: new FormControl(''),
        });

        this.testeBool;
    }

    openDialog() {
        const dialogRef = this.dialog.open(ConfirmationDialogOverview);
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'Sim') {
                this.removeMyself();
            }
        });
    }

    removeMyself() {
        this.removed.emit(this);
    }
}

@Component({
    selector:    'confirmation-dialog',
    templateUrl: './workers-aso-item-confirmation.template.html',
})

export class ConfirmationDialogOverview {
    constructor(public dialogRef: MdDialogRef<ConfirmationDialogOverview>) { }
}









