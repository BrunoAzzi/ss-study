import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientService } from "./services/http-client.service"; 
import { SessionsService } from "./services/sessions.service"; 
import { AuthGuard } from './guards/index';
import { MdSnackBar } from '@angular/material';

import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";

// Pipe
import { KeysPipe } from "./pipes/keys.pipe";
import { DataTablePipe } from "./components/perfil_emocional/status_trabalhadores/DataTablePipe.pipe";

// Components
import { CompaniesComponent } from "./views/companies/companies.component";
import { CategoryDividerComponent } from "./components/common/category-divider/category-divider.component";
import { DateRangeComponent } from "./components/common/date-range/date-range.component";

//import { DatepickerOverviewExample } from  "./views/companies/datepicker-overview-example.component";
import { PPEComponent } from "./views/ppe/ppe.component";
import { MyConstructionSitesComponent } from "./views/myconstructionsites/myconstructionsites.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";

// Painel Emocional

import { CompBaseStatusDia } from "./components/perfil_emocional/comp_base/comp-base-status-dia.component";
import { StatusDiaComponent } from "./components/perfil_emocional/status_dia/status_dia.component";
import { StatusTrabalhadoresComponent } from "./components/perfil_emocional/status_trabalhadores/status_trabalhadores.component";
import { StatusAnoComponent } from "./components/perfil_emocional/status_ano/status_ano.component";

// Layouts

import { LoginComponent } from "./views/login/login.component";
import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";

import { TopnavbarComponent } from "./components/common/topnavbar/topnavbar.component";
import { NavigationComponent } from "./components/common/navigation/navigation.component";
import { MyPhaserComponent } from "./components/common/my-phaser/my-phaser.component";

// Notifications
import { NotificationSidenavContainerModule } from "./components/common/notifications";

//Masks
import {Ng2MaskModule} from 'ng2-mask';

// Upload
// import { Ng2FileDropModule }  from 'ng2-file-drop';

// Routing module
import { AppRoutingModule } from "./app-routing.module";

// Calendar Range
import { MyDateRangePickerModule } from "mydaterangepicker";

// In memory data api
import { InMemoryDataService } from './mocks/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Angular Material Module
import { MaterialModule } from "./material.module";

// Flex Layout
import { FlexLayoutModule } from "@angular/flex-layout";

// Safety custom components
import { SafetyCardModule } from "./components/common/safety-card";
import { CompanyDetailsComponent } from "./components/forms/company-details/company-details.component";



// Pipes

@NgModule({
  declarations: [
    // Pipes
    KeysPipe,
    DataTablePipe,

    // Category Divider
    CategoryDividerComponent,

    // Components
    DateRangeComponent,
    AppComponent,
    CompaniesComponent,
    PPEComponent,
    MyConstructionSitesComponent,
    ReportsComponent,
    RepositoriesComponent,
    ThirdPartiesComponent,
    TrainingComponent,
    WorkersComponent,
    LoginComponent,
    BlankComponent,
    BasicComponent,
    TopnavbarComponent,
    NavigationComponent,
    MyPhaserComponent,
    CompanyDetailsComponent,

    // Painel Emocional
    StatusDiaComponent,
    StatusTrabalhadoresComponent,
    StatusAnoComponent,
    CompBaseStatusDia
  ],
  imports: [
    // Notification Module
    NotificationSidenavContainerModule,

    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    FormsModule,

    // Custom Components
    SafetyCardModule,

    // Charts
    ChartsModule,

    // Mocks
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),

    // Angular Material
    MaterialModule,

    //Masks
    Ng2MaskModule,

    // Flex Layout
    FlexLayoutModule,

    //Calendar Range
    MyDateRangePickerModule,

    //Upload
    // Ng2FileDropModule,

    // Routes
    AppRoutingModule,
  ],
  providers: [
    HttpClientService,
    AuthGuard,
    SessionsService,
    MdSnackBar,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
