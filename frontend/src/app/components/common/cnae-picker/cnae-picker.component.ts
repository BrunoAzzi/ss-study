import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { Cnae } from './../../../models/cnae.model'
import { CnaeService } from './../../../services/cnae.service'

@Component({
    selector: 'cnae-picker',
    templateUrl: './cnae-picker.component.html',
    styleUrls: ['./cnae-picker.component.scss']
})

export class CnaePickerComponent {

    @Input() cnaeCode: string;

    @Output() onSearch = new EventEmitter();

    loadingCep = false;
    cnaeMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/];

    constructor(
        private cnaeService:CnaeService,
        public snackBar: MdSnackBar) {}

    searchCnae(cnaeCode) {                
        this.cnaeService.getCnae(this.removeMask(cnaeCode))
            .subscribe(
                data => {                   
                   if(data) {
                       this.onSearch.emit(data);
                   } else {
                       this.onSearch.emit(data);
                       this.snackBar.open('CNAE não encontrado!', null, {duration: 3000})
                   }
                },
                error => {
                   this.snackBar.open('CNAE não encontrado!', null, {duration: 3000})
                }
            );
    }

    removeMask(cnaeCode) {
        return cnaeCode.replace(/[-\/_]/g, "");
    }
    

}