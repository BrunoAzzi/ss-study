import { ConstructionDetailComponent } from './views/constructions/detail/construction-detail.component';
import { ConstructionResolver } from './resolves/construction.resolver';
import { ConstructionsService } from './services/constructions.service';
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
import { AuthGuard } from './guards/index';

import { 
    MdSnackBar, 
    MdDialogModule, 
    MdToolbarModule, 
    MdButtonModule, 
    MdSelectModule, 
    MdInputModule, 
    MdChipsModule 
} from '@angular/material';

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
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";
import { MonitoringComponent } from './views/constructions/detail/monitoring/monitoring.component';
import { AreaMappingComponent, ContentElementDialog } from './components/area-mapping/area-mapping.component';
import { AreaMonitoringComponent } from './components/area-monitoring/area-monitoring.component';
import { SummaryItemComponent } from './components/area-monitoring/summary-item/summary-item.component';
import { SummaryComponent } from './components/area-monitoring/summary/summary.component';
import { RiskGraphComponent } from './components/area-monitoring/risk-graph/risk-graph.component';
import { FloorNavigationComponent } from './components/area-monitoring/floor-navigation/floor-navigation.component';

// Painel Emocional
import { EmotionalPanelComponent } from './views/constructions/detail/emotional-panel/emotional-panel.component';
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

import { BasicTopnavbarLayout } from './components/common/layouts/basic-topnavbar/basic-topnavbar.component';

import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";
import { TopnavbarComponent } from "./components/common/topnavbar/topnavbar.component";
import { NavigationComponent } from "./components/common/navigation/navigation.component";

// Notifications
import { NotificationSidenavContainerModule } from "./components/common/notifications";

//Masks
import { TextMaskModule } from 'angular2-text-mask';

// Routing module
import { AppRoutingModule } from "./app-routing.module";

// Calendar Range
import { MyDateRangePickerModule } from "mydaterangepicker";

// In memory data api
import { InMemoryDataService } from './mocks/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Angular Material Module
import { MaterialModule } from "./modules/material/material.module";

// Flex Layout
import { FlexLayoutModule } from "@angular/flex-layout";

// Safety custom modules
import { SafetyCardModule } from "./components/common/safety-card";
import { CategoryDividerModule } from "./components/common/category-divider";
import { FabComponent } from "./components/common/floating-action-button/fab.component";

import { InputFile } from "./components/common/input-file/input-file.component";
import { ConstructionsListComponent } from './views/constructions/list/constructions-list.component';
import { ConstructionsAddComponent } from './views/constructions/add/add.component';
import { LineConstructionDetailComponent } from './components/mysconstructionsites/line-construction-site/line-construction-site.component';
import { CardConstructionDetailComponent } from './components/mysconstructionsites/card-construction-site/card-construction-site.component';
import { ConstructionSiteDataComponent } from './components/mysconstructionsites/construction-site-data/construction-site-data.component';
import { FiltersComponent } from './components/area-monitoring/filters/filters.component';

@NgModule({
    declarations: [
        // Pipes
        KeysPipe,
        DataTablePipe,

        // Custom Components
        FabComponent,

        // Components
        DateRangeComponent,
        AppComponent,
        CompaniesComponent,
        PPEComponent,
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
        ContentElementDialog,

        // Layouts
        BlankComponent,
        BasicComponent,
        BasicTopnavbarLayout,

        // Painel Emocional
        EmotionalPanelComponent,
        StatusDiaComponent,
        StatusTrabalhadoresComponent,
        StatusAnoComponent,
        CompBaseStatusDia,

        // Trabalhadores
        SkillComponent,
        RecyclingComponent,
        InputFile,

        // Obras
        ConstructionDetailComponent,
        ConstructionsListComponent,
        ConstructionsAddComponent,
        LineConstructionDetailComponent,
        CardConstructionDetailComponent,
        ConstructionSiteDataComponent,
        FiltersComponent,
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

        TextMaskModule,

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
        MdDialogModule,
        MdToolbarModule,
        MdButtonModule,
        MdSelectModule,
        MdInputModule,
        MdChipsModule,

        // Flex Layout
        FlexLayoutModule,

        // Routes
        AppRoutingModule,
    ],
    entryComponents: [ContentElementDialog],
    providers: [
        HttpClientService,
        AuthGuard,
        SessionsService,
        PasswordService,
        MdSnackBar,
        ConstructionResolver,
        ConstructionsService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
