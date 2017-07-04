import { Component, EventEmitter, Output, Input } from '@angular/core';
import cep from 'cep-promise';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'cep-picker',
    templateUrl: './cep-picker.component.html',
    styleUrls: ['./cep-picker.component.scss']
})
export class CepPickerComponent {

    @Input() cep = '';
    @Output() onSearch = new EventEmitter();

    loadingCep = false;

    cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    constructor(public snackBar: MdSnackBar) {
    }


    searchCep(cepStr) {
        this.loadingCep = true;
        cep(cepStr)
            .then(data =>
                this.onSearch.emit(data)
            ).catch(() =>
                this.snackBar.open('CEP não encontrado!', null, {duration: 3000})
            ).then(() => {
                this.loadingCep = false;
        });
    }

}
