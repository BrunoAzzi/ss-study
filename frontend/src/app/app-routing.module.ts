import { ConstructionFormComponent } from './views/constructions/form/construction-form.component';
import { ConstructionDetailComponent } from './views/constructions/detail/construction-detail.component';
import { ConstructionResolver } from './resolves/construction.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './guards';
import { ConstructionsGuard } from './guards/constructions.guard';

import { CompaniesComponent } from "./views/companies/companies.component";
import { PPEComponent } from "./views/ppe/ppe.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";
import { EmotionalPanelComponent } from './views/constructions/detail/emotional-panel/emotional-panel.component';
import { MonitoringComponent } from './views/constructions/detail/monitoring/monitoring.component';

import { LoginComponent } from "./views/login/login.component";
import { PasswordRecoveryComponent } from "./views/password-recovery/password-recovery.component";
import { PasswordUpdateComponent } from "./views/password-update/password-update.component";

import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";

import { ConstructionsListComponent } from './views/constructions/list/constructions-list.component';
import { ConstructionsListResolver } from './resolves/construction-list.resolver';

import { BasicTopnavbarLayout } from './components/common/layouts/basic-topnavbar/basic-topnavbar.component';

const routes: Routes = [
    // Main redirect
    { path: '', redirectTo: 'constructions', pathMatch: 'full', canActivate: [AuthGuard] },

    // App views
    {
        path: '', component: BasicComponent,
        children: [
            {
                path: '', component: BasicTopnavbarLayout, children: [
                    { path: 'companies', data: { breadcrumb: "Empresas" }, component: CompaniesComponent, canActivate: [AuthGuard] },
                    { path: 'epis', data: { breadcrumb: "EPI's" }, component: PPEComponent, canActivate: [AuthGuard] },
                    { path: 'reports', data: { breadcrumb: "Relatórios" }, component: ReportsComponent, canActivate: [AuthGuard] },
                    { path: 'repositories', data: { breadcrumb: "Repositório" }, component: RepositoriesComponent, canActivate: [AuthGuard] },
                    { path: 'thirdparties', data: { breadcrumb: "Terceiros" }, component: ThirdPartiesComponent, canActivate: [AuthGuard] },
                    { path: 'training', data: { breadcrumb: "Treinamento" }, component: TrainingComponent, canActivate: [AuthGuard] },
                    { path: 'workers', data: { breadcrumb: "Trabalhadores" }, component: WorkersComponent, canActivate: [AuthGuard] },
                    {
						path: 'constructions', data: { breadcrumb: "Minhas Obras" }, canActivate: [AuthGuard], children: [
                            { path: '', pathMatch: 'prefix', data: { breadcrumb: "Minhas Obras" }, component: ConstructionsListComponent, canActivate: [AuthGuard], resolve: { constructions: ConstructionsListResolver } },
                            { path: 'new', data: { breadcrumb: "Minhas Obras" }, component: ConstructionFormComponent, canActivate: [AuthGuard] },
                        ]
                    },
                ]
            },
            {
                path: 'constructions/:id', component: ConstructionDetailComponent, resolve: { construction: ConstructionResolver }, children: [
                    { path: '', pathMatch: 'prefix', redirectTo: 'monitoring' },
                    { path: 'edit', component: ConstructionFormComponent, canActivate: [AuthGuard] },
                    { path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] },
                    { path: 'emotional-profile', component: EmotionalPanelComponent, canActivate: [AuthGuard] },
                ]
            }
        ]
    },
    {
        path: '', component: BlankComponent,
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ConstructionsListResolver, ConstructionsGuard]
})
export class AppRoutingModule { }
