import { Component } from '@angular/core';
import {CorreiosService} from "../../services/correios.service";
import { Endereco_completo } from '../../mocks/endereco_completo/endereco_completo';

@Component({
    selector: 'workers',
    templateUrl: 'workers.template.html',
    styleUrls: ['./workers.component.scss'],
    providers: [CorreiosService]
})
export class WorkersComponent {
    isReciclagem: boolean = false;
    desabilitado: boolean = true;
    radioGroupValue: string = "";
    mycbo: string = '';
    mycbonumber: number = 0;
    errorMessageExample1: string;
    errorMessageExample2: string;
    myCep: string = "";
    enderecoCompleto: string;
    tipocontratacao: any='';


    constructor (private correiosService: CorreiosService) { }

    status = [
        {value: 'ativo', viewValue: 'Ativo'},
        {value: 'inativo', viewValue: 'Inativo'},
        {value: 'afastado', viewValue: 'Afastado'},
        {value: 'demitido', viewValue: 'Demitido'},
    ];

    cargos = [
        {value: 'prog', viewValue: 'Programador'},
        {value: 'des', viewValue: 'Desenvolvedor'},
    ];

    cargosnacipa = [
        {value: 'suplente', viewValue: 'Membro Suplente'},
        {value: 'efetivo', viewValue: 'Membro Efetivo'},
        {value: 'presidente', viewValue: 'Presidente'},
        {value: 'vice', viewValue: 'Vice Presidente'},
        {value: 'secretario', viewValue: 'Secretário'},
    ];

    escolaridades = [
        {value: 'fund_i', viewValue: 'Fundamental incompleto'},
        {value: 'fund_c', viewValue: 'Fundamental completo'},
        {value: 'medio_i', viewValue: 'Médio incompleto'},
        {value: 'medio_c', viewValue: 'Médio completo'},
        {value: 'sup_i', viewValue: 'Superior incompleto'},
        {value: 'sup_c', viewValue: 'Superior completo'},
        {value: 'pos', viewValue: 'Pós Graduação'},
    ];

    necessidades = [
        {value: 's', viewValue: 'Sim'},
        {value: 'n', viewValue: 'Não'},
    ];

    autocompleteAdressFromApi() {
        //console.log(this.myCep);
        this.correiosService.getAddress(this.myCep).subscribe( data => {
            this.enderecoCompleto = data.cidade + " - " + data.estado + ", " + data.bairro + ", " + data.tipoDeLogradouro + " " + data.logradouro;
            // console.log(this.enderecoCompleto);
        });

    }


    checkCboEmpty() {
        this.mycbonumber = Number.parseInt(this.mycbo);
        if(this.mycbonumber>0){
            this.desabilitado = false;
        } else {
            this.desabilitado = true;
        }
    }
}
