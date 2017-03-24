import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import{BuscarEstrategia} from '../components/buscar-estrategia/buscar-estrategia'
import{BuscarEstrategiaService} from '../buscar-estrategia/buscar-estrategia.service'
import {TabsModule} from "ngx-tabs";
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import {FiltroArrayPipe} from '../buscar-estrategia/filtro/filter-pipe';
import {filtroCategoria} from '../buscar-estrategia/filtro/filter-categoria';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TabsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    BuscarEstrategia,
    filtroCategoria,
    FiltroArrayPipe

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: "/"},

  ]
})
export class BuscarEstrategiaModule {



}
