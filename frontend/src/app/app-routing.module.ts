import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './guards';
import { HasConstructionSitesGuard } from './guards/hasConstructionSites.guard';

import { CompaniesComponent } from "./views/companies/companies.component";
import { PPEComponent } from "./views/ppe/ppe.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";
import { PainelEmocionalComponent } from './views/painelEmocional/painelEmocional.component';
import { MonitoringComponent } from './views/myconstructionsites/monitoring/monitoring.component';

import { LoginComponent } from "./views/login/login.component";
import { PasswordRecoveryComponent } from "./views/password-recovery/password-recovery.component";
import { PasswordUpdateComponent } from "./views/password-update/password-update.component";

import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";
import { ConstructionSiteComponent } from "./components/common/layouts/construction-site/construction-site.component";

import { MyConstructionSitesLandingPageComponent } from "./views/myconstructionsites/landing-page/my-construction-sites-landing-page.component";
import { MyConstructionSitesShowComponent } from './views/myconstructionsites/show/my-construction-sites-show.component';
import { MyConstructionSitesAddComponent } from './views/myconstructionsites/add/add.component';
import { ConstructionSiteService } from './services/construction-site/construction-site.service';
import { ConstructionSiteResolver } from './resolves/construction-site-resolver.service';

import { BasicTopnavbarLayout } from './components/common/layouts/basic-topnavbar/basic-topnavbar.component';

const routes: Routes = [
    // Main redirect
    { path: '', redirectTo: 'myconstructionsites', pathMatch: 'full', canActivate: [AuthGuard] },

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
                ]
            },
            { path: 'constructions', component: MyConstructionSitesShowComponent, canActivate: [AuthGuard] },
            {
                path: 'constructions/:id', component: ConstructionSiteComponent, children: [
                    { path: '', pathMatch: 'prefix', redirectTo: 'monitoring' },
                    { path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] },
                    { path: 'emotionalProfile', component: PainelEmocionalComponent, canActivate: [AuthGuard] },
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
    { path: '**', redirectTo: 'myconstructionsites', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ConstructionSiteService, ConstructionSiteResolver, HasConstructionSitesGuard]
})
export class AppRoutingModule { }
