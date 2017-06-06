import { Component, Inject, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalDataWorker } from '../../../mocks/personalDataWorker/personalDataWorker';
import { CorreiosService } from "../../../services/correios.service";
import { Endereco_completo } from '../../../mocks/endereco_completo/endereco_completo';
import { CommonModule} from '@angular/common';
import { CustomValidators } from './customValidators';
import { CBOService } from "../../../services/cbo.service";
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'workers-data',
    templateUrl: 'workersData.template.html',
    styleUrls: ['./workersData.component.scss'],
    providers: [CorreiosService, CBOService]
})
export class WorkersDataComponent {
    disabled: boolean = true;
    mycbo: string = "";
    mycbonumber: number = 0;
    myCep: string = "";
    completeAddress: string;
    hiredType: boolean = true;
    isValid: boolean = false;
    worker: PersonalDataWorker;
    myForm: FormGroup;
    selectedStatusValue: string;


    constructor(private correiosService: CorreiosService, private cboService: CBOService, private fb: FormBuilder) {

        this.myForm = this.fb.group({
            fullname: new FormControl('', Validators.compose([Validators.required, CustomValidators.onlytext])),
            cpf: new FormControl('', Validators.compose([Validators.required, CustomValidators.cpf])),
            ctps: new FormControl('', CustomValidators.onlyPositiveNumbers),
            birthDate: null,
            age: null,
            nit: new FormControl('', CustomValidators.onlyPositiveNumbers),
            cep: null,
            completeAddress: null,
            admissionDate: null,
            complement: null,
            contact: null,
            cbo: new FormControl('', Validators.required),
            textArea: null,
            company: new FormControl({ value: '', disabled: this.hiredType }, null),
            hiredTypeRadio: null,
            sex: null,
            scholarity: [''],
            role: [''],
            necessitys: [''],
            status: ['']
        })
    }


    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    status = [
        { value: 'ativo', viewValue: 'Ativo' },
        { value: 'ferias', viewValue: 'Férias' },
        { value: 'afastado', viewValue: 'Afastado' },
        { value: 'demitido', viewValue: 'Demitido' },
    ];

    labors = [

    ];

    scholaritys = [
        { value: 'fund_i', viewValue: 'Fundamental incompleto' },
        { value: 'fund_c', viewValue: 'Fundamental completo' },
        { value: 'medio_i', viewValue: 'Médio incompleto' },
        { value: 'medio_c', viewValue: 'Médio completo' },
        { value: 'sup_i', viewValue: 'Superior incompleto' },
        { value: 'sup_c', viewValue: 'Superior completo' },
        { value: 'pos', viewValue: 'Pós Graduação' },
    ];

    necessitys = [
        { value: 0, viewValue: 'Sim' },
        { value: 1, viewValue: 'Não' },
    ];
    selectedNecessity: number = 1;


    autocompleteAdressFromApi() {
        this.correiosService.getAddress(this.myCep).subscribe(data => {
            this.completeAddress = data.cidade + " - " + data.estado + ", " + data.bairro + ", " + data.tipoDeLogradouro + " " + data.logradouro;
        });
    }

    autocompleteRoleFromMock() {

        this.cboService.getCBO("6125-05").subscribe(
            (response) => {
                this.labors = response.map((label, index) => {
                    return { value: index, viewValue: label };
                });
            },
        );
    }

    hiredChange() {
        this.hiredType = !this.hiredType;
        this.hiredType ? this.myForm.controls.company.disable() : this.myForm.controls.company.enable();
    }

    checkCboEmpty() {
        this.mycbonumber = Number.parseInt(this.mycbo);
        (this.mycbonumber > 0) ? this.disabled = false : this.disabled = true;
    }

    savePersonalDataWorker(safetyCard) {
        console.log(this.myForm.controls);
        if (this.myForm.valid) {
            safetyCard.close();
        }
    }

}
