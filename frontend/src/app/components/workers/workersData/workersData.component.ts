import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { personalDataWorker } from '../../../mocks/personalDataWorker/personalDataWorker';
import {CorreiosService} from "../../../services/correios.service";
import { Endereco_completo } from '../../../mocks/endereco_completo/endereco_completo';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'workers-data',
    templateUrl: 'workersData.template.html',
    styleUrls: ['./workersData.component.scss'],
    providers: [CorreiosService]
})
export class WorkersDataComponent {
    disabled: boolean = true;
    mycbo: string = '';
    mycbonumber: number = 0;
    errorMessageExample1: string;
    errorMessageExample2: string;
    myCep: string = "";
    completeAddress: string;
    hiredType: any='';
    isValid: boolean = false;

         constructor (private correiosService: CorreiosService, private formBuilder:FormBuilder) {
         }


             status = [
                 {value: 'ativo', viewValue: 'Ativo'},
                 {value: 'inativo', viewValue: 'Inativo'},
                 {value: 'afastado', viewValue: 'Afastado'},
                 {value: 'demitido', viewValue: 'Demitido'},
             ];

             labors = [
                 {value: 'prog', viewValue: 'Programador'},
                 {value: 'des', viewValue: 'Desenvolvedor'},
             ];

             laborsInCipa = [
                 {value: 'suplente', viewValue: 'Membro Suplente'},
                 {value: 'efetivo', viewValue: 'Membro Efetivo'},
                 {value: 'presidente', viewValue: 'Presidente'},
                 {value: 'vice', viewValue: 'Vice Presidente'},
                 {value: 'secretario', viewValue: 'Secretário'},
             ];

             scholaritys = [
                 {value: 'fund_i', viewValue: 'Fundamental incompleto'},
                 {value: 'fund_c', viewValue: 'Fundamental completo'},
                 {value: 'medio_i', viewValue: 'Médio incompleto'},
                 {value: 'medio_c', viewValue: 'Médio completo'},
                 {value: 'sup_i', viewValue: 'Superior incompleto'},
                 {value: 'sup_c', viewValue: 'Superior completo'},
                 {value: 'pos', viewValue: 'Pós Graduação'},
             ];

             necessitys = [
                 {value: 0, viewValue: 'Sim'},
                 {value: 1, viewValue: 'Não'},
             ];
             selectedNecessity: number = 1;

             brigadistas = [
                 {value: 0, viewValue: 'Sim'},
                 {value: 1, viewValue: 'Não'},
             ];
             selectedBrigadista: number = 1;

             cipeiros = [
                 {value: 0, viewValue: 'Sim'},
                 {value: 1, viewValue: 'Não'},
             ];
             selectedCipeiro: number = 1;

             selectedCipaLabor:boolean = false;

             autocompleteAdressFromApi() {
                 //console.log(this.myCep);
                 this.correiosService.getAddress(this.myCep).subscribe( data => {
                     this.completeAddress = data.cidade + " - " + data.estado + ", " + data.bairro + ", " + data.tipoDeLogradouro + " " + data.logradouro;
                     // console.log(this.enderecoCompleto);
                 });

             }


             checkCboEmpty() {
                 this.mycbonumber = Number.parseInt(this.mycbo);
                 if(this.mycbonumber>0){
                     this.disabled = false;
                 } else {
                     this.disabled = true;
                 }
             }


                 savePersonalDataWorker(safetyCard) {
                     console.log("Personal Data saved!");
                     if (this.isValid) safetyCard.close();
                 }

}
