import {Component} from '@angular/core'
import {AddGoalService} from './add-goal.service'
import {History} from '../history/history'
import {HistoryService} from '../history/history.service'
import {Coach} from '../../coach/coach.component'
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group";


import 'style-loader!./add-goal.scss';

@Component({
  selector: 'add-goal',
  template: `
    <form>
      <div class="col-md-12"><label for="input01">Dias</label>
      <table>
        <tr>
          <td *ngFor='let day of days'>  <input type='checkbox'  (change)="updateChecked2(day.value,$event)">{{day.label}}</td>
        </tr>
      </table></div>

        <div class="col-md-12"><label for="input01">Progresso</label>
        <input type="number" class="form-control formModal"  name="meta"  [(ngModel)]="progresso"></div>


        <div class="col-md-10"><label for="input01">Compromentimento</label><input type="range" class="form-control " name="meta"  value="70" [(ngModel)]="compromentimento" min="0" max="100" /></div>
        <div class="col-md-2 rangeDiv "><p class="rangeLabel">{{compromentimento}}</p></div>


        <div class="col-md-12"><label for="input01">Meta</label>
        <input type="text" class="form-control formModal"  name="meta"  [(ngModel)]="newMeta"></div>

        <div class="col-md-12"><label for="input01">Tematica</label>

        <select name="meta" class="form-control formModal" [(ngModel)]="tematica">
          <option value="Alimentação">Alimentação</option>
          <option value="Exercicio">Exercicio</option>
          <option value="Estresse">Estresse</option>
          <option value="Estresse">Prevenção</option>
          <option value="Estresse">Relacionamento</option>
        </select>
        <!--<table>
          <tr>
            <td *ngFor='let tema of tematica'><input type='checkbox' class="form-control formModal" name="meta" [(ngModel)]="tematicas">  <p class="{{tema.icon}}"></p>{{tema.label}}</td>
          </tr>
        </table>
      <input type="text" class="form-control formModal"  name="meta"  value="tematica"[(ngModel)]="tematica">-->
      </div>

      <input (click)="insertMeta(progresso,compromentimento,newMeta,tematica)" class="btn btn-success pull-right"type="submit" value="Submit">
    </form>
    `,
    providers: [AddGoalService, History, HistoryService]

})

export class AddGoal {
  postData: string;
  errorMessage: string;
  historico = [];
  days = [{'label':'Segunda' , 'value': 1},{'label':'Terça' , 'value': 2},{'label':'Quarta' , 'value': 3},{'label':'Quinta' , 'value': 4},{'label':'Sexta' , 'value': 5},{'label':'Sabado' , 'value': 6},{'label':'Domingo' , 'value': 7}];
  daySelected= [];
  metaId;
  id;
  //tematica = [{'label':'Alimentação' , 'icon': 'ion-android-restaurant'},{'label':'Exercicio' , 'icon': 'ion-android-bicycle'},{'label':'Estresse' , 'icon': 'ion-fireball'},{'label':'Prevenção' , 'icon': 'ion-umbrella'},{'label':'Relacionamento' , 'icon': 'ion-android-favorite-outline'}];







  constructor(private AddGoalService: AddGoalService, private _history: HistoryService, private _coach: Coach) {

  }

  getId(progreso,comprometimento,meta,tematica){
      this.AddGoalService.getData().subscribe((data)=>  this.id=(data[0].id),error =>  this.errorMessage = <any>error,() =>  this.loadDays(progreso,comprometimento,meta,tematica));
      return this.id;

  }

  insertMeta(progreso,comprometimento,meta,tematica) {
    this.AddGoalService.insertMeta(1, progreso,comprometimento,meta,tematica).subscribe(data  => this.historico.push(1,progreso,comprometimento,meta,tematica),error =>  this.errorMessage = <any>error,() => this.getId(progreso,comprometimento,meta,tematica));
    this._coach.hideChildModal();
    //  this._history.insertMeta(1,newMeta,qtSemanal).subscribe(hero  => this.historico.push(1,newMeta,qtSemanal),error =>  this.errorMessage = <any>error);
  }

  loadDays(progreso,comprometimento,meta,tematica){
    for(var i =0; i < this.daySelected.length; i++){
      this.AddGoalService.insertMetaDias( this.id, this.daySelected[i]).subscribe(data  => this.historico.push(1,progreso,comprometimento,meta,tematica),error =>  this.errorMessage = <any>error);
    }
  }




  updateChecked2(value,event){
    if(event.target.checked){
      this.daySelected.push(value);
    }
    else if (!event.target.checked){
      let indexx = this.daySelected.indexOf(value);
      this.daySelected.splice(indexx,1);
    }
    console.log(this.daySelected)
  }





}
