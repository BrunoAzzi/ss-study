import { Component } from '@angular/core';
import { BuscarEstrategiaService } from './buscar-estrategia.service';
import { Subject } from 'rxjs/Subject';
import 'style-loader!./buscar-estrategia.scss';
@Component({
  selector: 'buscar-estrategia',
  template: `<div class="formEstrategia col-md-12"><h4>Filtrar por categoria</h4>
            <div class="cc-selector">

              <input id="alimentacaoC" type="radio" name="categoria" value="1" [(ngModel)]="Categoria"/>
              <label class="drinkcard-cc alimentacaoC" for="alimentacaoC"></label>

              <input id="exercicioC" type="radio" name="categoria" value="2" [(ngModel)]="Categoria"/>
              <label class="drinkcard-cc exercicioC"for="exercicioC"></label>

              <input id="estresseC" type="radio" name="categoria" value="3"[(ngModel)]="Categoria" />
              <label class="drinkcard-cc estresseC"for="estresseC"></label>

              <input id="prevencaoC" type="radio" name="categoria" value="4" [(ngModel)]="Categoria"/>
              <label class="drinkcard-cc prevencaoC"for="prevencaoC"></label>

              <input id="relacionamentoC" type="radio" name="categoria" value="5"[(ngModel)]="Categoria" />
              <label class="drinkcard-cc relacionamentoC"for="relacionamentoC"></label>


            </div>

              <!--<select name="estrategias" class="form-control  " [(ngModel)]="tematica">
                <option value="Alimentacao">Alimentação</option>
                <option value="Exercicio">Exercicio</option>
                <option value="">Estresse</option>
                <option value="">Prevenção</option>
                <option value="Relacionamento">Relacionamento</option>
              </select>-->
            </div>
          <div class="formEstrategia col-md-12">
          <input type="text" id ="ceSearch" class="form-control palavraChave"  name="ceSearch"  [(ngModel)]="estrategiaSearch" >

           <!--(keyup)="searchTerm$.next($event.target.value)""-->
              <div *ngIf="Categoria == 1">
                <div *ngFor="let search of dataAlimentacao">{{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                <div *ngIf="search.estrategias.length > 0  ">
                    {{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                    <div id="{{search.id}}" class="collapse">
                      <table  class="tableStyle table table-fixed"  >
                      <tr class="rowStyle " *ngFor="let es of search.estrategias | filtroCategoria : 'title' : estrategiaSearch ; let i = index" >
                      <td class="itemStyle col-md-12"> <button type="button" class="vincularMetaBtn">{{es.title }}</button></td>
                      </tr>
                      </table>
                    </div>
                </div>
                </div>
              </div>
              <div *ngIf="Categoria == 2 ">
                <div *ngFor="let search of dataExercicio ">{{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                <div *ngIf="search.estrategias.length > 0  ">
                    {{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                    <div id="{{search.id}}" class="collapse">
                      <table  class="tableStyle table table-fixed"  >
                      <tr class="rowStyle " *ngFor="let es of search.estrategias | filtroCategoria : 'title' : estrategiaSearch ; let i = index" >
                      <td class="itemStyle col-md-12"> <button type="button" class="vincularMetaBtn">{{es.title }}</button></td>
                      </tr>
                      </table>
                    </div>
                </div>
                </div>
              </div>
              <div *ngIf="Categoria == 3">
                <!--ngFor="let result of results | slice:0:14"-->
                <div *ngFor="let search of dataEstresse ">
                  <div *ngIf="search.estrategias.length > 0  ">
                      {{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                      <div id="{{search.id}}" class="collapse">
                        <table  class="tableStyle table table-fixed"  >
                        <tr class="rowStyle " *ngFor="let es of search.estrategias | filtroCategoria : 'title' : estrategiaSearch ; let i = index" >
                        <td class="itemStyle col-md-12"> <button type="button" class="vincularMetaBtn">{{es.title }}</button></td>
                        </tr>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
              <div *ngIf="Categoria == 4">
                <div *ngFor="let search of dataPrevencao">{{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                <div *ngIf="search.estrategias.length > 0  ">
                    {{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                    <div id="{{search.id}}" class="collapse">
                      <table  class="tableStyle table table-fixed"  >
                      <tr class="rowStyle " *ngFor="let es of search.estrategias | filtroCategoria : 'title' : estrategiaSearch ; let i = index" >
                      <td class="itemStyle col-md-12"> <button type="button" class="vincularMetaBtn">{{es.title }}</button></td>
                      </tr>
                      </table>
                    </div>
                </div>
                </div>
              </div>
              <div *ngIf="Categoria == 5">
                <div *ngFor="let search of dataRelacionamento">{{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                <div *ngIf="search.estrategias.length > 0  ">
                    {{search.name}} <button type="button" class="btnToogle ion-chevron-down" data-toggle="collapse" [attr.data-target]="'#' + search.id" ></button>
                    <div id="{{search.id}}" class="collapse">
                      <table  class="tableStyle table table-fixed"  >
                      <tr class="rowStyle " *ngFor="let es of search.estrategias | filtroCategoria : 'title' : estrategiaSearch ; let i = index" >
                      <td class="itemStyle col-md-12"> <button type="button" class="vincularMetaBtn">{{es.title }}</button></td>
                      </tr>
                      </table>
                    </div>
                </div>
                </div>
              </div>
            </div>
                `,
  providers: [BuscarEstrategiaService]
})

export class BuscarEstrategia {

  dataEstresse = [];
  dataAlimentacao = [];
  dataExercicio = [];
  dataPrevencao = [];
  dataRelacionamento = [];

  estrategiaSearch: string;

  constructor(private searchService: BuscarEstrategiaService) {

    this.searchService.getDataEstresse().subscribe((estresse) => this.dataEstresse = estresse);
    this.searchService.getDataAlimentacao().subscribe((alimentacao) => this.dataAlimentacao = alimentacao);
    this.searchService.getDataExercicio().subscribe((exercicio) => this.dataExercicio = exercicio);
    this.searchService.getDataPrevencao().subscribe((prevencao) => this.dataPrevencao = prevencao);
    this.searchService.getDataRelacionamento().subscribe((relacionamento) => this.dataRelacionamento = relacionamento);
  }



}
