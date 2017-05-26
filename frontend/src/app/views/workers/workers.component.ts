import { Component, EventEmitter  } from '@angular/core';
import {CorreiosService} from "../../services/correios.service";
import { Endereco_completo } from '../../mocks/endereco_completo/endereco_completo';
import { CommonModule } from '@angular/common';
import { Skill } from '../../mocks/skill/skill';

@Component({
    selector: 'workers',
    templateUrl: 'workers.template.html',
    styleUrls: ['./workers.component.scss'],
    providers: [CorreiosService]
})
export class WorkersComponent {

    isReciclagem: boolean = false;
    disabled: boolean = true;
    radioGroupValue: string = "";
    mycbo: string = '';
    mycbonumber: number = 0;
    errorMessageExample1: string;
    errorMessageExample2: string;
    myCep: string = "";
    completeAddress: string;
    hiredType: any='';

    maximunLength: number;
    isValid: boolean = false;

    skillList = [];

    addSkill() {
        if (this.skillList.length < this.maximunLength) this.skillList.push(new Skill());
    }

    removeSkill(skill: Skill) {
        let index = this.skillList.indexOf(skill);
        if (index > -1) this.skillList.splice(index, 1);
    }

    skillNames = [
        "NR 32",
        "NR 35",
        "NR 18",
        "NR 33",
    ];


    savePersonalDataWorker(safetyCard) {
        console.log("Personal Data saved!");
        if (this.isValid) safetyCard.close();
    }

    saveSkills(safetyCard) {
        console.log("skills saved!");
        if (this.isValid) safetyCard.close();
    }

    constructor (private correiosService: CorreiosService) {
        if (this.skillList.length < 1) this.skillList.push(new Skill());
        this.maximunLength = this.skillNames.length;
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


    // public uploader:FileUploader = new FileUploader({url: 'https://evening-anchorage-3159.herokuapp.com/api/'});
      public hasBaseDropZoneOver:boolean = false;
      public hasAnotherDropZoneOver:boolean = false;

      public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
      }

      public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
      }
}
