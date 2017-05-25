import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";

// Pipe
import { KeysPipe } from "./pipes/keys.pipe";
import { DataTablePipe } from "./components/perfil_emocional/status_trabalhadores/DataTablePipe.pipe";

// Components
import { CompaniesComponent } from "./views/companies/companies.component";
import { SkillComponent } from "./components/workers/skill/skill.component";
import { RecyclingComponent } from "./components/workers/recycling/recycling.component";

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
import { RegisterComponent } from "./views/register/register.component";
import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";

import { TopnavbarComponent } from "./components/common/topnavbar/topnavbar.component";
import { NavigationComponent } from "./components/common/navigation/navigation.component";
import { MyPhaserComponent } from "./components/common/my-phaser/my-phaser.component";

// Notifications
import { NotificationSidenavContainerModule } from "./components/common/notifications";

// Routing module
import { AppRoutingModule } from "./app-routing.module";

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

@NgModule({
    declarations: [
        // Pipes
        KeysPipe,
        DataTablePipe,

        // Components
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
        RegisterComponent,
        BlankComponent,
        BasicComponent,
        TopnavbarComponent,
        NavigationComponent,
        MyPhaserComponent,

        // Painel Emocional
        StatusDiaComponent,
        StatusTrabalhadoresComponent,
        StatusAnoComponent,
        CompBaseStatusDia,

        // Trabalhadores
        SkillComponent,
        RecyclingComponent,

    ],
    imports: [
        // Notification Module
        NotificationSidenavContainerModule,

        // Angular modules
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        CommonModule,

        // Custom Modules
        SafetyCardModule,
        CategoryDividerModule,

        // Charts
        ChartsModule,

        // Mocks
        InMemoryWebApiModule.forRoot(InMemoryDataService),

        // Angular Material
        MaterialModule,

        // Flex Layout
        FlexLayoutModule,

        // Routes
        AppRoutingModule,

    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
