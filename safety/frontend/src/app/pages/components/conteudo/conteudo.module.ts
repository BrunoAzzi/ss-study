import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import{BuscarConteudo} from '../components/buscar-estrategia/buscar-conteudo'
import{BuscarConteudoService} from '../buscar-estrategia/buscar-conteudo.service'
import {TabsModule} from "ngx-tabs";
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import {FiltroArrayPipe} from '../buscar-conteudo/filtro/filter-pipe';
import {filtroCategoria} from '../buscar-conteudo/filtro/filter-categoria';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TabsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    BuscarConteudo,
    filtroCategoria,
    FiltroArrayPipe

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: "/"},

  ]
})
export class BuscarEstrategiaModule {



}
