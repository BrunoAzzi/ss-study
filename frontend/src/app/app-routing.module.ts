import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './guards/index';

import { CompaniesComponent } from "./views/companies/companies.component";
import { PPEComponent } from "./views/ppe/ppe.component";
import { MyConstructionSitesComponent } from "./views/myconstructionsites/myconstructionsites.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";
import { MonitoringComponent } from './views/monitoring/monitoring.component';
import { PainelEmocionalComponent } from './views/painelEmocional/painelEmocional.component';

import { LoginComponent } from "./views/login/login.component";
import { PasswordRecoveryComponent } from "./views/password-recovery/password-recovery.component";
import { PasswordUpdateComponent } from "./views/password-update/password-update.component";

import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";

import { MyConstructionSitesLandingPageComponent } from "./views/myconstructionsites/landing-page/my-construction-sites-landing-page.component";
import { MyConstructionSitesPhaserComponent } from './views/myconstructionsites/phaser/my-construction-sites-phaser.component';

const routes: Routes = [
    // Main redirect
    { path: '', redirectTo: 'monitoring', pathMatch: 'full', canActivate: [AuthGuard] },

    // App views
    {
        path: '', component: BasicComponent,
        children: [
            { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard] },
            { path: 'painelEmocional', component: PainelEmocionalComponent, canActivate: [AuthGuard] },
            { path: 'epis', component: PPEComponent, canActivate: [AuthGuard] },
            { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
            { path: 'repositories', component: RepositoriesComponent, canActivate: [AuthGuard] },
            { path: 'thirdparties', component: ThirdPartiesComponent, canActivate: [AuthGuard] },
            { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },
            { path: 'workers', component: WorkersComponent, canActivate: [AuthGuard] },
            { path: 'monitoring', component: MonitoringComponent, canActivate: [AuthGuard] },
            {
                path: 'myconstructionsites', component: MyConstructionSitesComponent, canActivate: [AuthGuard], children: [
                    { path: '', component: MyConstructionSitesLandingPageComponent, canActivate: [AuthGuard] },
                    // { path: 'list', component: MyConstructionSitesListComponent, canActivate: [AuthGuard] },
                    // { path: 'add', component: MyConstructionSitesAddComponent, canActivate: [AuthGuard] },
                    { path: 'phaser', component: MyConstructionSitesPhaserComponent, canActivate: [AuthGuard] },
                ]
            },
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
    exports: [RouterModule]
})
export class AppRoutingModule { }
