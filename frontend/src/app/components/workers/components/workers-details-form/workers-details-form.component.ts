import { Component, Inject, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CorreiosService } from "../../../../services/correios.service";
import { Endereco_completo } from '../../../../mocks/endereco_completo/endereco_completo';
import { CommonModule} from '@angular/common';
import { CustomValidators } from './customValidators';
import { CBOService } from "../../../../services/cbo.service";
import { WorkersDataService } from "../../../../services/workers/workersData.service";
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'workers-data',
    templateUrl: 'workers-details-form.template.html',
    styleUrls: ['./workers-details-form.component.scss'],
    providers: [CorreiosService, CBOService, WorkersDataService]
})
export class WorkersDataComponent {
    @Input() worker;
    @Output() cpfUpdated = new EventEmitter<string>();

    disabled = true;
    mycbo = '';
    mycbonumber = 0;
    modelCEP = '';
    cpf = '';
    hiredType = true;
    myForm: FormGroup;
    completeAddress: string;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: {
            1: 'Jan',
            2: 'Fev',
            3: 'Mar',
            4: 'Abr',
            5: 'Mai',
            6: 'Jun',
            7: 'Jul',
            8: 'Ago',
            9: 'Set',
            10: 'Out',
            11: 'Nov',
            12: 'Dez'
        },
        todayBtnTxt: 'Hoje'
    };

    status = [
        { value: 'ativo', viewValue: 'Ativo' },
        { value: 'inativo', viewValue: 'Inativo' },
    ];

    labors = [{ value: '', viewValue: '' }];

    sexs = ['Masculino','Feminino'];
    hireds = ['Próprio','Terceiro'];

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
        { value: 1, viewValue: 'Sim' },
        { value: 2, viewValue: 'Não' },
    ];
    selectedNecessity: number = 1;

    cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    nitMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/];
    cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    cboMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];


    constructor(private correiosService: CorreiosService, private cboService: CBOService, private workersService: WorkersDataService, private fb: FormBuilder) {
        this.myForm = this.fb.group({
            fullname: new FormControl('', Validators.compose([Validators.required, CustomValidators.onlytext])),
            cpf: new FormControl('', Validators.compose([Validators.required, CustomValidators.cpf])),
            ctps: new FormControl('', CustomValidators.onlyPositiveNumbers),
            birthDate: null,
            age: null,
            nit: new FormControl(''),
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

    autocompleteAdressFromApi() {
        this.correiosService.getAddress(this.modelCEP).subscribe(data => {
            this.completeAddress = `${data.cidade} - ${data.estado}, ${data.bairro}, ${data.tipoDeLogradouro} ${data.logradouro}`;
        });
    }


    autoCompleteWorker() {
        this.cpfUpdated.emit(this.cpf);
        this.cboService.getCBO(this.mycbo).subscribe(
            (response) => {
                this.labors = response;
            },
        );
    }

    autocompleteRoleFromMock() {
        this.cboService.getCBO("6125-05").subscribe(
            (response) => {
                this.labors = response;
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

    savePersonalDataWorker(workerData) {
        if (this.myForm.valid) {
            workerData.close();
        }
    }

}
