import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {TabsModule} from "ngx-tabs";
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group";



import { Feature2 } from './feature2.component';
import { routing }       from './feature2.routing';

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
    RADIO_GROUP_DIRECTIVES,

    ModalModule.forRoot()
  ],
  declarations: [
/*    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,*/
    Feature2,

  ],
  providers: [
    /*CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService*/
    
  ]
})
export class Feature2Module {}
