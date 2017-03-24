import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Coach } from './coach.component';
import { routing }       from './coach.routing';

import {AddGoal} from '../components/add-goal/add-goal';
import {AddAnnotation} from '../components/add-annotation/add-annotation';

import{BuscarEstrategia} from '../components/buscar-estrategia/buscar-estrategia'
import{BuscarEstrategiaService} from '../buscar-estrategia/buscar-estrategia.service'


import {ClientFocus} from '../components/client-focus/client-focus'
import {ClientFocusService} from '../components/client-focus/client-focus.service'

import{ClientProfile} from '../components/client-profile/client-profile'

import{ProgressSessions} from '../components/progress-sessions/progress-sessions'

import {filtroCategoria} from '../components/buscar-estrategia/filtro/filter-categoria'
import {FiltroArrayPipe} from '../components/buscar-estrategia/filtro/filter-pipe'
import {TabsModule} from "ngx-tabs";
import {Estrategias} from "../components/estrategias/estrategias"
import {History} from '../components/history/history'


import {Conteudo}  from '../components/conteudo/conteudo'

import{BuscarConteudo} from '../components/buscar-conteudo/buscar-conteudo'
import{BuscarConteudoService} from '../buscar-conteudo/buscar-conteudo.service'

import { DropdownModule, ModalModule } from 'ng2-bootstrap';


/*
import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    TabsModule,
    ModalModule.forRoot()
  ],
  declarations: [

    ClientFocus,
    Coach,
    AddGoal,
    AddAnnotation,
    ClientProfile,
    ProgressSessions,
    History,
    Estrategias,
    BuscarEstrategia,
    FiltroArrayPipe,
    filtroCategoria,
    Conteudo,
    BuscarConteudo

  ],
  providers: [
    ClientFocusService,

  ]
})
export class CoachModule {



}
