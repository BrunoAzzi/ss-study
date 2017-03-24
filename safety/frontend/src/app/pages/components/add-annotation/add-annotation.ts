import{Component} from '@angular/core'
import{AddAnnotationService} from './add-annotation.service'
import {Coach} from '../../coach/coach.component'
import {HistoryService} from '../history/history.service'

@Component({
    selector:'add-annotation',
    template: `
      <form>
        <label for="input01">Titulo</label>
        <input type="text" class="form-control formModal"  name="meta" value="meta" [(ngModel)]="titulo">
        <label for="input01">Anotação</label>
        <input type="text" class="form-control formModal"  name="meta" value="meta" [(ngModel)]="anotacao">

        <input (click)="insertAnotacao(titulo,anotacao)" class="btn btn-success pull-right"type="submit" value="Submit">
      </form>
      `,
        providers:[AddAnnotationService,HistoryService]
})

export class AddAnnotation{

  postData:string;
  errorMessage: string;
  historico = [];


  constructor(private AddAnnotationService:AddAnnotationService, private _coach:Coach,private _history:HistoryService,){}

  insertAnotacao(anotacaoTitle,anotacao){
    this._history.getData().subscribe((data)=> this.historico = data);
    this._history.insertAnotacao(1,anotacaoTitle ,anotacao).subscribe(data=> this.postData = JSON.stringify(data),error=> alert(error),() => console.log(this.postData));
    this._coach.hideChildModal2();
  //  this._history.insertMeta(1,newMeta,qtSemanal).subscribe(hero  => this.historico.push(1,newMeta,qtSemanal),error =>  this.errorMessage = <any>error);
  }


}
