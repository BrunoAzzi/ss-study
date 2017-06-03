import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalDataWorker } from '../../../mocks/personalDataWorker/personalDataWorker';
import { CorreiosService } from "../../../services/correios.service";
import { Endereco_completo } from '../../../mocks/endereco_completo/endereco_completo';
import { CommonModule} from '@angular/common';
import { CustomValidators } from './customValidators';
import { CBO } from '../../../mocks/CBO/CBO';
import { CBOService } from "../../../services/cbo.service";

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

    constructor(private correiosService: CorreiosService, private cboService: CBOService, private fb: FormBuilder) {
        this.getCBOs();
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

    getCBOs(): void { }

    status = [
        { value: 'ativo', viewValue: 'Ativo' },
        { value: 'inativo', viewValue: 'Inativo' },
        { value: 'afastado', viewValue: 'Afastado' },
        { value: 'demitido', viewValue: 'Demitido' },
    ];

    labors = [
        { value: 'prog', viewValue: 'Programador' },
        { value: 'des', viewValue: 'Desenvolvedor' },
    ];

    laborsInCipa = [
        { value: 'suplente', viewValue: 'Membro Suplente' },
        { value: 'efetivo', viewValue: 'Membro Efetivo' },
        { value: 'presidente', viewValue: 'Presidente' },
        { value: 'vice', viewValue: 'Vice Presidente' },
        { value: 'secretario', viewValue: 'Secretário' },
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

    brigadistas = [
        { value: 0, viewValue: 'Sim' },
        { value: 1, viewValue: 'Não' },
    ];
    selectedBrigadista: number = 1;

    cipeiros = [
        { value: 0, viewValue: 'Sim' },
        { value: 1, viewValue: 'Não' },
    ];
    selectedCipeiro: number = 1;

    selectedCipaLabor: boolean = false;

    autocompleteAdressFromApi() {
        this.correiosService.getAddress(this.myCep).subscribe(data => {
            this.completeAddress = data.cidade + " - " + data.estado + ", " + data.bairro + ", " + data.tipoDeLogradouro + " " + data.logradouro;
        });
    }

    autocompleteRoleFromMock() {

        this.cboService.getCBO().subscribe(
            function(response) { console.log("Success Response" + response) },
            function(error) { console.log("Error happened" + error) },
            function() { console.log("the subscription is completed") }
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
        if (this.myForm.valid) {
            safetyCard.close();
        }
    }

}
