
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientService } from "./services/http-client.service";
import { SessionsService } from "./services/sessions.service";
import { PasswordService } from "./services/password.service";
import { ConstructionService } from "./services/construction.service";
import { AuthGuard } from './guards/index';
import { MdSnackBar } from '@angular/material';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { MyDatePickerModule } from 'mydatepicker';
import { CookieService } from 'ng2-cookies';

// Pipe
import { KeysPipe } from "./pipes/keys.pipe";
import { DataTablePipe } from "./components/perfil_emocional/status_trabalhadores/DataTablePipe.pipe";

// Components
import { SecurityWorksComponent } from "./components/workers/securityWorks/securityWorks.component";
import { WorkersDataComponent } from "./components/workers/workersData/workersData.component";
import { CompaniesComponent } from "./views/companies/companies.component";
import { CompanyDetailsComponent } from  "./components/forms/company-details/company-details.component";
import { DateRangeComponent } from "./components/common/date-range/date-range.component";
import { SkillComponent } from "./components/workers/skill/skill.component";
import { RecyclingComponent } from "./components/workers/recycling/recycling.component";
import { BoxMessageComponent } from "./components/common/box-message/box-message.component";
import { BlueprintComponent } from './components/blueprint/blueprint.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { BarLevelComponent } from './components/bar-level/bar-level.component';

import { PPEComponent } from "./views/ppe/ppe.component";
import { MyConstructionSitesComponent } from "./views/myconstructionsites/myconstructionsites.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";
import { MonitoringComponent } from './views/myconstructionsites/monitoring/monitoring.component';
import { AreaMappingComponent } from './components/area-mapping/area-mapping.component';
import { AreaMonitoringComponent } from './components/area-monitoring/area-monitoring.component';
import { SummaryItemComponent } from './components/area-monitoring/summary-item/summary-item.component';
import { SummaryComponent } from './components/area-monitoring/summary/summary.component';
import { RiskGraphComponent } from './components/area-monitoring/risk-graph/risk-graph.component';
import { FloorNavigationComponent } from './components/area-monitoring/floor-navigation/floor-navigation.component';

// Painel Emocional
import { PainelEmocionalComponent } from './views/painelEmocional/painelEmocional.component';
import { CompBaseStatusDia } from "./components/perfil_emocional/comp_base/comp-base-status-dia.component";
import { StatusDiaComponent } from "./components/perfil_emocional/status_dia/status_dia.component";
import { StatusTrabalhadoresComponent } from "./components/perfil_emocional/status_trabalhadores/status_trabalhadores.component";
import { StatusAnoComponent } from "./components/perfil_emocional/status_ano/status_ano.component";

//Models

import { Floor } from './models/floor.model';
import { Coordinate } from './models/coordinate.model';

// Layouts

import { LoginComponent } from "./views/login/login.component";
import { PasswordRecoveryComponent } from "./views/password-recovery/password-recovery.component";
import { PasswordUpdateComponent } from "./views/password-update/password-update.component";

import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";
import { ConstructionSiteComponent } from "./components/common/layouts/construction-site/construction-site.component";
import { TopnavbarComponent } from "./components/common/topnavbar/topnavbar.component";
import { NavigationComponent } from "./components/common/navigation/navigation.component";

// Notifications
import { NotificationSidenavContainerModule } from "./components/common/notifications";

//Masks
import {Ng2MaskModule} from 'ng2-mask';

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

// Safety custom modules
import { SafetyCardModule } from "./components/common/safety-card";
import { CategoryDividerModule } from "./components/common/category-divider";

import { InputFile } from "./components/common/input-file/input-file.component";
import { MyConstructionSitesLandingPageComponent } from './views/myconstructionsites/landing-page/my-construction-sites-landing-page.component';
import { MyConstructionSitesShowComponent } from './views/myconstructionsites/show/my-construction-sites-show.component';
import { LineConstructionSiteComponent } from './components/mysconstructionsites/line-construction-site/line-construction-site.component';
import { CardConstructionSiteComponent } from './components/mysconstructionsites/card-construction-site/card-construction-site.component';

@NgModule({
    declarations: [
        // Pipes
        KeysPipe,
        DataTablePipe,

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
        PasswordRecoveryComponent,
        PasswordUpdateComponent,
        TopnavbarComponent,
        NavigationComponent,
        CompanyDetailsComponent,
        WorkersDataComponent,
        SecurityWorksComponent,
        BoxMessageComponent,
        MonitoringComponent,
        BlueprintComponent,
        ToolboxComponent,
        BarLevelComponent,
        AreaMappingComponent,
        AreaMonitoringComponent,
        SummaryItemComponent,
        SummaryComponent,
        RiskGraphComponent,
        FloorNavigationComponent,

        // Layouts
        BlankComponent,
        BasicComponent,
        ConstructionSiteComponent,

        // Painel Emocional
        PainelEmocionalComponent,
        StatusDiaComponent,
        StatusTrabalhadoresComponent,
        StatusAnoComponent,
        CompBaseStatusDia,

        // Trabalhadores
        SkillComponent,
        RecyclingComponent,
        InputFile,

        // Obras
        MyConstructionSitesLandingPageComponent,
        MyConstructionSitesShowComponent,
        LineConstructionSiteComponent,
        CardConstructionSiteComponent
    ],
    imports: [
        // Notification Module
        NotificationSidenavContainerModule,

        // Angular modules
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,

        ReactiveFormsModule,
        CommonModule,
        JsonpModule,

        Ng2MaskModule,

        // Custom Components
        SafetyCardModule,
        CategoryDividerModule,

        // Charts
        ChartsModule,

        // Datepicker
        MyDatePickerModule,

        // Mocks
        InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),


        //Calendar Range
        MyDateRangePickerModule,

        // Angular Material
        MaterialModule,

        // Flex Layout
        FlexLayoutModule,

        // Routes
        AppRoutingModule,
    ],
    providers: [
        HttpClientService,
        AuthGuard,
        SessionsService,
        PasswordService,
        MdSnackBar,
        ConstructionService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
