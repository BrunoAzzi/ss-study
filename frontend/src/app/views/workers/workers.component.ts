import { Component } from '@angular/core';

@Component({
    selector: 'workers',
    templateUrl: 'workers.template.html',
    styleUrls: ['./workers.component.scss']
})
export class WorkersComponent {
    isReciclagem: boolean = false;
    desabilitado: boolean = true;
    mycro: string = "";

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
    {value: '', viewValue: ''},
    {value: '', viewValue: ''},
  ];

  checkCroEmpty() {
          if(this.mycro.length>0){
              this.desabilitado = false;
          } else {
              this.desabilitado = true;
          }
    }
 }
