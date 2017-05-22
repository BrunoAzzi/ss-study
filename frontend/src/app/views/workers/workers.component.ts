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
    mycbo: string = "";
    errorMessageExample1: string;
    errorMessageExample2: string;
    myCep: string = "";
    enderecoCompleto: string;
    //
    constructor (private correiosService: CorreiosService) { }

    //myCep = [{"cep":"88036400","tipoDeLogradouro":"Rua","logradouro":"Luiz Oscar de Carvalho","bairro":"Trindade","cidade":"Florianópolis","estado":"SC"}];

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
        console.log(this.myCep);
        this.correiosService.getAddress(this.myCep).subscribe( data => {
            this.enderecoCompleto = data.cidade + " - " + data.estado + ", " + data.bairro + ", " + data.tipoDeLogradouro + " " + data.logradouro;
            // console.log(this.enderecoCompleto);
        });

    }

        myHiredChange(){
              console.log(this.radioGroupValue);
        }

    checkCboEmpty() {
        if(this.mycbo.length>0){
            this.desabilitado = false;
        } else {
            this.desabilitado = true;
        }
    }
}
