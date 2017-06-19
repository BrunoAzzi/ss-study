import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CorreiosService } from "../../../services/correios.service";
import { Endereco_completo } from '../../../mocks/endereco_completo/endereco_completo';
import { CommonModule} from '@angular/common';
import { CustomValidators } from './customValidators';
import { CBOService } from "../../../services/cbo.service";
import { WorkersDataService } from "../../../services/workers/workersData.service";
import { IMyDpOptions } from 'mydatepicker';

@Component({
    selector: 'workers-data',
    templateUrl: 'workersData.template.html',
    styleUrls: ['./workersData.component.scss'],
    providers: [CorreiosService, CBOService, WorkersDataService]
})
export class WorkersDataComponent {
    @Output() cpfValue = new EventEmitter<string>();
    
    disabled = true;

    mycbo = '';
    mycbonumber = 0;
    modelCEP = '';
    cpf = '';
    modelCompleteAdress = '';
    modelAge = '';
    modelNit = '';
    modelCTPS = '';
    modelComplement = '';
    modelContact = '';
    modelFunction = '';
    modelCompany = '';
    selectedLabor = '';
    selectedStatusValue = '';
    birthDateModel = null;
    admissionDateModel = null;
    modelSpecialNecessitys = '';

    own = true;
    outsource = !this.own;
    masc = true;
    fem = !this.masc;

    model: Object = { date: { year: 2018, month: 10, day: 9 } };
    sexModel = 'm';
    fullname = '';
    hiredType = true;
    isValid = false;
    myForm: FormGroup;
    completeAddress: string;
    selectedScholarityValue: string;

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

    labors = [];

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

    autocompleteAdressFromApi() {
        this.correiosService.getAddress(this.modelCEP).subscribe(data => {
            this.completeAddress = `${data.cidade} - ${data.estado}, ${data.bairro}, ${data.tipoDeLogradouro} ${data.logradouro}`;
        });
    }

   
    autoCompleteWorker(){
        this.cpfValue.emit(this.cpf);
        this.workersService.getWorker(this.cpf).subscribe(
            (response) => {
                
                this.fullname = response.name,
                this.modelCEP = response.cep;
                this.modelCompleteAdress = response.completeAddress;
                this.modelAge = response.age;
                this.modelNit = response.nit;
                this.modelCTPS = response.ctps;
                this.modelComplement = response.complement;
                this.modelContact = response.contact;
                this.modelFunction = response.cboDescription;
                this.mycbo = response.cbo;
                this.modelCompany = response.company;

                this.fem = (response.sex=="f")? true : false;
                this.masc = !this.fem;
                this.outsource = (response.hiredType=="outsource")? true : false;
                this.own = !this.outsource;
   
                this.selectedScholarityValue = response.scholarity;
                this.modelSpecialNecessitys = response.specialNecessity;
                this.selectedStatusValue = response.status;
                this.cboService.getCBO("6125-05").subscribe(
                        (response) => {
                             console.log(response);
                            this.labors = response.map((label, index) => {
                                 
                                return { value: response.laborCBO, viewValue: label };
                            });
                        },
                    );
                    
                
                //this.selectedLabor =  response.laborCBO;
               
                let bdate = new Date(response.birthDate);
                this.birthDateModel = 
                        {
                            date: {
                                    year: bdate.getFullYear(),
                                    month: bdate.getMonth() + 1,
                                    day: bdate.getDate()
                                  }
                        
                       };
                       
                let addate = new Date(response.admissionDate);
                this.admissionDateModel = { 
                            date: {
                                    year: addate.getFullYear(),
                                    month: addate.getMonth() + 1,
                                    day: addate.getDate()
                            }
                }
               
            },
        );
        

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
        //se não passar, descomentar: console.log(this.myForm.controls);
    
        if (this.myForm.valid) {

            safetyCard.close();
        }
    }

}
