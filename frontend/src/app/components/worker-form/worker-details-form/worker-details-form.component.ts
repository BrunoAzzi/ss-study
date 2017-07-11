import { Worker } from '../../../models/worker.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './worker-details-form-custom-validators';
import { IMyDpOptions } from 'mydatepicker';
import { WorkersDataService } from '../../../services/workers/workersData.service';
// import { CBOService } from '../../../services/cbo.service';

@Component({
    selector:    'worker-details-form',
    templateUrl: './worker-details-form.template.html',
    styleUrls:   ['./worker-details-form.component.scss'],
    providers:   [
        // CBOService,
        WorkersDataService]
})

export class WorkersDataComponent {

    @Input() worker: Worker;
    @Output() saved: EventEmitter<any> = new EventEmitter();
    @Output() cpfUpdated               = new EventEmitter<string>();

    disabled    = true;
    mycbo       = '';
    mycbonumber = 0;
    modelCEP    = '';
    cpf         = '';
    hiredType   = true;
    myForm: FormGroup;
    completeAddress: string;
    photoPath: any;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat:  'dd/mm/yyyy',
        dayLabels:   { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    status = [
        { value: true, viewValue: 'Ativo' },
        { value: false, viewValue: 'Inativo' },
    ];

    labors = [{ value: '', viewValue: '' }];

    hireds = ['Próprio', 'Terceiro'];

    scholaritys = [
        { value: 1, viewValue: 'Fundamental incompleto' },
        { value: 2, viewValue: 'Fundamental completo' },
        { value: 3, viewValue: 'Médio incompleto' },
        { value: 4, viewValue: 'Médio completo' },
        { value: 5, viewValue: 'Superior incompleto' },
        { value: 6, viewValue: 'Superior completo' },
        { value: 7, viewValue: 'Pós Graduação' },
    ];

    necessitys        = [
        { value: true, viewValue: 'Sim' },
        { value: false, viewValue: 'Não' },
    ];
    selectedNecessity = 1;

    cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    nitMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/];
    cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    //cboMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    constructor(private workersService: WorkersDataService, private fb: FormBuilder) {
        this.myForm = this.fb.group({

            fullname:        new FormControl('', Validators.compose([Validators.required, CustomValidators.onlytext])),
            cpf:             new FormControl('', Validators.compose([Validators.required, CustomValidators.cpf])),
            ctps:            new FormControl('', CustomValidators.onlyPositiveNumbers),
            birthDate:       null,
            age:             new FormControl({ value: '', disabled: this.hiredType }, null),
            nit:             new FormControl(''),
            cep:             null,
            completeAddress: null,
            admissionDate:   null,
            complement:      null,
            contact:         null,
            cbo:             new FormControl('', Validators.required),
            textArea:        null,
            company:         new FormControl({ value: '', disabled: this.hiredType }, null),
            hiredTypeRadio:  null,
            sex:             null,
            scholarity:      [''],
            role:            [''],
            necessitys:      [''],
            status:          ['']
        });
    }

    autoCompleteWorker() {
        if (!this.myForm.controls.cpf.invalid) {
            this.cpfUpdated.emit(this.cpf);

            // this.cboService.getCBO(this.mycbo).subscribe(
            //     (response) => {
            //         this.labors = response;
            //     },
            // );
        }
    }

    hiredChange() {
        this.hiredType = !this.hiredType;
        this.hiredType ? this.myForm.controls.company.disable() : this.myForm.controls.company.enable();
    }

    checkCboEmpty() {
        this.mycbonumber = Number.parseInt(this.mycbo);
        (this.mycbonumber > 0) ? this.disabled = false : this.disabled = true;
    }

    onLogoChange(image) {
        this.photoPath = image;
    }

    onCepSearch(data) {
        this.worker.cep             = data.cep;
        this.worker.completeAddress =
            data.street + ' , ' +
            data.neighborhood + ' - ' +
            data.city + ' / ' +
            data.state;
    }

}