import { ConstructionFormSmartComponent } from './views/constructions/form/construction-form.container';
import { ConstructionDetailComponent } from './views/constructions/detail/construction-detail.component';
import { ConstructionResolver } from './resolves/construction.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';

import { CompaniesComponent } from './views/companies/companies.component';
import { PPEComponent } from './views/ppe/ppe.component';
import { ReportsComponent } from './views/reports/reports.component';
import { RepositoriesComponent } from './views/repositories/repositories.component';
import { TrainingComponent } from './views/training/training.component';
import { EmotionalPanelComponent } from './views/constructions/detail/emotional-panel/emotional-panel.component';
import { MonitoringComponent } from './views/constructions/detail/monitoring/monitoring.component';
import { OverviewComponent } from './views/constructions/detail/overview/overview.component';

// Supplier
import { SupplierListComponent } from './views/suppliers/list/list.component';
import { SupplierFormComponent } from './views/suppliers/form/form.component';
import { SupplierListResolver } from './resolves/supplier-list.resolver';
import { SupplierResolver } from './resolves/supplier.resolver';
import { SupplierService } from './services/supplier.service';

// Worker
import { WorkerFormComponent } from './views/workers/form/form.component';
import { WorkerListResolver } from './resolves/worker-list.resolver';
import { WorkerService } from './services/worker.service';
import { WorkerListComponent } from './views/workers/list/list.component';

import { LoginComponent } from './views/login/login.component';
import { PasswordRecoveryComponent } from './views/password-recovery/password-recovery.component';
import { PasswordUpdateComponent } from './views/password-update/password-update.component';

import { BlankComponent } from './components/common/layouts/blank/blank.component';
import { BasicComponent } from './components/common/layouts/basic/basic.component';

import { ConstructionsListComponent } from './views/constructions/list/constructions-list.component';
import { ConstructionsListResolver } from './resolves/construction-list.resolver';

import { BasicTopNavBarLayout } from './components/common/layouts/basic-topnavbar/basic-topnavbar.component';

const routes: Routes = [
    // Main redirect
    { path: '', redirectTo: 'constructions', pathMatch: 'full', canActivate: [AuthGuard] },

    // App views
    {
        path:     '', component: BasicComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '', component: BasicTopNavBarLayout, children: [

                { path: 'companies', data: { breadcrumb: 'Empresas' }, component: CompaniesComponent },
                { path: 'epis', data: { breadcrumb: 'EPI' }, component: PPEComponent },
                { path: 'reports', data: { breadcrumb: 'Relatórios' }, component: ReportsComponent },
                { path: 'repositories', data: { breadcrumb: 'Repositório' }, component: RepositoriesComponent },
                { path: 'training', data: { breadcrumb: 'Treinamento' }, component: TrainingComponent },
                {
                    path: 'workers', children: [

                    { path: '', data: { breadcrumb: 'Gerenciamento de Trabalhadores' }, component: WorkerListComponent, resolve: { workerList: WorkerListResolver } },
                    { path: 'new', data: { breadcrumb: 'Cadastro de Trabalhadores' }, component: WorkerFormComponent },
                    { path: ':id/edit', data: { breadcrumb: 'Cadastro de Trabalhadores' }, component: WorkerFormComponent },
                ]
                },
                {
                    path: 'suppliers', children: [
                    { path: '', data: { breadcrumb: 'Gerenciamento de Fornecedores' }, component: SupplierListComponent, resolve: { suppliers: SupplierListResolver } },
                    { path: 'new', data: { breadcrumb: 'Cadastro de Fornecedor' }, component: SupplierFormComponent },
                    { path: ':id/edit', data: { breadcrumb: 'Alteração de Fornecedor' }, component: SupplierFormComponent, resolve: { supplier: SupplierResolver } },
                ]
                },
                {
                    path: 'constructions', children: [
                    { path: '', pathMatch: 'prefix', data: { breadcrumb: 'Minhas Obras' }, component: ConstructionsListComponent },
                    { path: 'new', data: { breadcrumb: 'Nova Obra' }, component: ConstructionFormSmartComponent, resolve: { construction: ConstructionResolver } },
                ]
                },
            ]
            },
            {
                path: 'constructions/:id', component: ConstructionDetailComponent, resolve: { construction: ConstructionResolver }, children: [
                { path: '', pathMatch: 'prefix', redirectTo: 'overview' },
                { path: 'overview', data: { breadcrumb: 'Dashboard' }, component: OverviewComponent, canActivate: [AuthGuard] },
                { path: 'edit', component: ConstructionFormSmartComponent, canActivate: [AuthGuard] },
                { path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] },
                { path: 'emotional-profile', component: EmotionalPanelComponent, canActivate: [AuthGuard] },
            ]
            }
        ]
    },
    {
        path:     '', component: BlankComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'send-recover', component: PasswordRecoveryComponent },
            { path: 'recover', component: PasswordUpdateComponent },
        ]
    },

    // Handle all other routes
    { path: '**', redirectTo: 'constructions', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
    imports:   [RouterModule.forRoot(routes)],
    exports:   [RouterModule],
    providers: [
        ConstructionsListResolver,
        SupplierListResolver,
        SupplierService,
        SupplierResolver,
        WorkerListResolver,
        WorkerService,
    ]
})
export class AppRoutingModule {
}
