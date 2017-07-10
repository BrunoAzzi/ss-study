import { OccurrencesListComponent } from './components/activities/occurrences/occurrences-list/occurrences-list.component';
import { TasksListComponent } from './components/activities/tasks/tasks-list/tasks-list.component';
import { TasksDialogComponent } from './components/activities/tasks/tasks-dialog/tasks-dialog.component';
import { TasksFormComponent } from './components/activities/tasks/tasks-form/tasks-form.component';
import { TasksAttachmentFiles } from './components/activities/tasks/tasks-attachment-files/tasks-attachment-files.component';
import { ActivitiesComponent } from './views/constructions/detail/activities/activities.component';
import { ConstructionFormSmartComponent } from './views/constructions/form/construction-form.container';
import { ConstructionFormComponent } from './components/construction-form/construction-form.component';
import { ConstructionListItemComponent } from './components/construction-list-item/construction-list-item.component';
import { ConstructionMaintenancesFormComponent } from './components/construction-form/components/construction-maintenances-form/construction-maintenances-form.component';
import { ConstructionWorkersFormComponent } from './components/construction-form/components/construction-workers-form/construction-workers-form.component';
import { ConstructionManagersFormComponent } from './components/construction-form/components/construction-managers-form/construction-managers-form.component';
import { ConstructionDetailsFormComponent } from './components/construction-form/components/construction-details-form/construction-details-form.component';
import { SectionListComponent } from './components/common/section-list/section-list.component';
import { ChecklistCellComponent } from './components/common/checklist-cell/checklist-cell.component';
import { ListCellComponent } from './components/common/list-cell/list-cell.component';
import { OverviewComponent } from './views/constructions/detail/overview/overview.component';
import { ConstructionDetailComponent } from './views/constructions/detail/construction-detail.component';
import { ConstructionsLandingPageComponent } from './components/landing-page/landing-page.component';
import { ConstructionResolver } from './resolves/construction.resolver';
import { ConstructionsService } from './services/constructions.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientService } from './services/http-client.service';
import { CnaeService } from './services/cnae.service';
import { SessionsService } from './services/sessions.service';
import { PasswordService } from './services/password.service';
import { TasksService } from './services/tasks.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/index';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { MyDatePickerModule } from 'mydatepicker';
import { MomentModule } from 'angular2-moment';

import {
    MdAutocompleteModule,
    MdSnackBar,
    MdDatepickerModule,
    MdNativeDateModule,
    MdDialogModule,
    MdToolbarModule,
    MdButtonModule,
    MdSelectModule,
    MdInputModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdSlideToggleModule,
    MdDatepickerModule,
    MdNativeDateModule
} from '@angular/material';

// Pipe
import { KeysPipe } from './pipes/keys.pipe';
import { DataTablePipe } from './components/perfil_emocional/status_trabalhadores/DataTablePipe.pipe';

// Components
import { SecurityWorksComponent } from './components/worker-form/worker-security-form/worker-security-form.component';
import { WorkersDataComponent } from './components/worker-form/worker-details-form/worker-details-form.component';
import { CompaniesComponent } from './views/companies/companies.component';

import { AsoItemComponent, ConfirmationDialogOverview } from './components/workers/workers-aso-item/workers-aso-item.component';

import { DateRangeComponent } from './components/common/date-range/date-range.component';
import { SkillComponent } from './components/worker-form/worker-skill-form/worker-skill-form.component';
import { RecyclingComponent } from './components/workers/workers-recycling/workers-recycling.component';
import { BoxMessageComponent } from './components/common/box-message/box-message.component';
import { BlueprintComponent } from './components/blueprint/blueprint.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';

import { PPEComponent } from './views/ppe/ppe.component';
import { ReportsComponent } from './views/reports/reports.component';
import { RepositoriesComponent } from './views/repositories/repositories.component';
import { TrainingComponent } from './views/training/training.component';

// Worker
import { WorkerFormComponent } from './views/workers/form/form.component';
import { WorkerListComponent } from './views/workers/list/list.component';
import { LineWorkerDetailComponent } from './components/workers/workers-line-detail/workers-line-detail.component';

import { MonitoringComponent } from './views/constructions/detail/monitoring/monitoring.component';
import { AreaMappingComponent } from './components/area-mapping/area-mapping.component';
import { MappingDialog } from './components/area-mapping/cone/mapping-dialog/mapping-dialog.component';
import { MappingStages } from './components/area-mapping/cone/mapping-stages/mapping-stages.component';
import { SensorIdentification } from './components/area-mapping/cone/sensor-identification/sensor-identification.component';
import { RelatedRisk } from './components/area-mapping/cone/related-risk/related-risk.component';
import { RelatedRisks } from './components/area-mapping/cone/related-risks/related-risks.component';
import { Permissions } from './components/area-mapping/cone/permissions/permissions.component';
import { CollaboratorEditableList } from './components/common/collaborator/collaborator-editable-list/collaborator-editable-list.component';
import { AreaMonitoringComponent } from './components/area-monitoring/area-monitoring.component';
import { SummaryItemComponent } from './components/summary-item/summary-item.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RiskGraphComponent } from './components/area-monitoring/risk-graph/risk-graph.component';
import { ResponsableDataComponent } from './components/company/responsable-data/responsable-data.component';
import { AddInformationComponent } from './components/company/additional-information/additional-information.component';
import { Ng2FileDropModule } from 'ng2-file-drop';

import { WorkersOverviewComponent } from './components/overview/workers-overview/workers-overview.component';
import { ConstructionsStatusComponent } from './components/overview/constructions-status/constructions-status.component';
import { FloorsSummaryComponent } from './components/floors-summary/floors-summary.component';

// Suppliers
import { SupplierListComponent } from './views/suppliers/list/list.component';
import { SupplierFormComponent } from './views/suppliers/form/form.component';
import { LineSupplierDetailComponent } from './components/suppliers/line-supplier/line-supplier.component';

// Painel Emocional
import { EmotionalPanelComponent } from './views/constructions/detail/emotional-panel/emotional-panel.component';
import { CompBaseStatusDia } from './components/perfil_emocional/comp_base/comp-base-status-dia.component';
import { StatusDiaComponent } from './components/perfil_emocional/status_dia/status_dia.component';
import { StatusTrabalhadoresComponent } from './components/perfil_emocional/status_trabalhadores/status_trabalhadores.component';
import { StatusAnoComponent } from './components/perfil_emocional/status_ano/status_ano.component';

// Layouts
import { LoginComponent } from './views/login/login.component';
import { PasswordRecoveryComponent } from './views/password-recovery/password-recovery.component';
import { PasswordUpdateComponent } from './views/password-update/password-update.component';

import { BasicTopNavBarLayout } from './components/common/layouts/basic-topnavbar/basic-topnavbar.component';

import { BlankComponent } from './components/common/layouts/blank/blank.component';
import { BasicComponent } from './components/common/layouts/basic/basic.component';
import { TopnavbarComponent } from './components/common/topnavbar/topnavbar.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';

// Notifications
import { NotificationSidenavContainerModule } from './components/common/notifications';

// Masks
import { TextMaskModule } from 'angular2-text-mask';

// Routing module
import { AppRoutingModule } from './app-routing.module';

// Calendar Range
import { MyDateRangePickerModule } from 'mydaterangepicker';

// In memory data api
import { InMemoryDataService } from './mocks/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Angular Material Module
import { MaterialModule } from './modules/material/material.module';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Safety custom modules
import { SafetyCardModule } from './components/common/safety-card';
import { CategoryDividerModule } from './components/common/category-divider';
import { FabComponent } from './components/common/floating-action-button/fab.component';

import { DropFileComponent } from './components/common/drop-file/drop-file.component';
import { CepPickerComponent } from './components/common/cep-picker/cep-picker.component';
import { CnaePickerComponent } from './components/common/cnae-picker/cnae-picker.component';
import { ConstructionStatusPickerComponent } from './components/common/construction-status-picker/construction-status-picker.component';
import { ConstructionSitesStatusIconComponent } from './components/common/construction-sites-status-icon/construction-sites-status-icon.component';
import { AddNewCategoryComponent } from './components/common/add-category/add-category.component';

import { InputFile } from './components/common/input-file/input-file.component';
import { ConstructionsListComponent } from './views/constructions/list/constructions-list.component';
import { FiltersComponent } from './components/area-monitoring/filters/filters.component';
import { AlertsTabComponent } from './components/area-monitoring/alerts-tab/alerts-tab.component';
import { AlertsTabItemComponent } from './components/area-monitoring/alerts-tab-item/alerts-tab-item.component';
import { ConstructionSummaryComponent } from './components/construction-summary/construction-summary.component';
import { SectorSummaryComponent } from './components/sector-summary/sector-summary.component';
import { EquipmentInlineFormComponent } from './components/equipment-inline-form/equipment-inline-form.component';
import { ListItemComponent } from './components/common/list-item/list-item.component';
import { ListActionBarComponent } from './components/common/list-action-bar/list-action-bar.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { WorkerHealthFormComponent } from './components/worker-form/worker-health-form/worker-health-form.component';
import { WorkerQualificationsFormComponent } from './components/worker-form/worker-qualifications-form/worker-qualifications-form.component';
import { ConstructionBlueprintsFormComponent } from './components/construction-form/components/construction-blueprints-form/construction-blueprints-form.component';
import { CategorizedListComponent } from './components/common/categorized-list/categorized-list.component';
import { CategorizedListItemComponent } from './components/common/categorized-list-item/categorized-list-item.component';
import { AutofocusDirective } from './components/common/autofocus/autofocus.directive';
import { BackendPathPipe } from './pipes/backend-path.pipe';

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
        TrainingComponent,

        // Worker
        WorkerFormComponent,
        WorkerListComponent,
        LineWorkerDetailComponent,

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
        OverviewComponent,
        BlueprintComponent,
        ToolboxComponent,
        AreaMappingComponent,
        AreaMonitoringComponent,
        SummaryItemComponent,
        SummaryComponent,
        RiskGraphComponent,
        ResponsableDataComponent,
        AddInformationComponent,
        FloorsSummaryComponent,
        MappingDialog,
        MappingStages,
        SensorIdentification,
        Permissions,
        RelatedRisk,
        RelatedRisks,
        CollaboratorEditableList,
        WorkersOverviewComponent,
        ListCellComponent,
        SectionListComponent,
        ChecklistCellComponent,
        ConstructionsStatusComponent,
        FloorsSummaryComponent,
        DropFileComponent,

        // Suppliers
        SupplierListComponent,
        LineSupplierDetailComponent,
        SupplierFormComponent,

        // Suppliers
        SupplierListComponent,
        LineSupplierDetailComponent,
        SupplierFormComponent,

        // Layouts
        BlankComponent,
        BasicComponent,
        BasicTopNavBarLayout,

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
        AsoItemComponent,
        ConfirmationDialogOverview,
        WorkerHealthFormComponent,

        // Obras
        ConstructionDetailComponent,
        ConstructionsListComponent,
        ConstructionFormSmartComponent,
        ConstructionFormComponent,
        ConstructionListItemComponent,

        ConstructionDetailsFormComponent,
        CepPickerComponent,
        CnaePickerComponent,
        ConstructionManagersFormComponent,
        ConstructionStatusPickerComponent,
        ConstructionSitesStatusIconComponent,
        ConstructionWorkersFormComponent,
        ConstructionMaintenancesFormComponent,
        AddNewCategoryComponent,

        FiltersComponent,
        ConstructionsLandingPageComponent,
        AlertsTabComponent,
        AlertsTabItemComponent,
        ConstructionSummaryComponent,
        SectorSummaryComponent,
        EquipmentInlineFormComponent,
        ListItemComponent,
        ListActionBarComponent,
        WorkerQualificationsFormComponent,
        ConstructionBlueprintsFormComponent,
        CategorizedListComponent,
        CategorizedListItemComponent,
        AutofocusDirective,
        ActivitiesComponent,
        TasksListComponent,
        TasksDialogComponent,
        TasksFormComponent,
        TasksAttachmentFiles,
        OccurrencesListComponent,
        BackendPathPipe,
    ],
    imports: [
        // Notification Module
        NotificationSidenavContainerModule,

        // Angular modules
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        MdSlideToggleModule,

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
        MdNativeDateModule,
        MomentModule,

        // Mocks
        InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),

        // File Drop
        Ng2FileDropModule,

        // Calendar Range
        MyDateRangePickerModule,

        // Angular Material
        MaterialModule,
        MdAutocompleteModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdDialogModule,
        MdToolbarModule,
        MdButtonModule,
        MdProgressSpinnerModule,
        MdSelectModule,        
        MdInputModule,
        MdChipsModule,
        MdSlideToggleModule,
        MdDatepickerModule,


        // Flex Layout
        FlexLayoutModule,

        // Moments
        MomentModule,

        // Routes
        AppRoutingModule,
    ],
    entryComponents: [ConfirmationDialogOverview, MappingDialog, TasksDialogComponent],
    providers: [
        HttpClientService,
        AuthGuard,
        SessionsService,
        PasswordService,
        MdSnackBar,
        CnaeService,
        UserService,
        TasksService,
        ConstructionResolver,
        ConstructionsService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap:       [AppComponent]
})

export class AppModule {}
