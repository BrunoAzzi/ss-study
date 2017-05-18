import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { CompaniesComponent } from "./views/companies/companies.component";
import { PPEComponent } from "./views/ppe/ppe.component";
import { MyConstructionSitesComponent } from "./views/myconstructionsites/myconstructionsites.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { RepositoriesComponent } from "./views/repositories/repositories.component";
import { ThirdPartiesComponent } from "./views/thirdparties/thirdparties.component";
import { TrainingComponent } from "./views/training/training.component";
import { WorkersComponent } from "./views/workers/workers.component";

import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { BlankComponent } from "./components/common/layouts/blank/blank.component";
import { BasicComponent } from "./components/common/layouts/basic/basic.component";

const routes:Routes = [
  // Main redirect
  { path: '', redirectTo: '/myconstructionsites', pathMatch: 'full' },

  // App views
  {
    path: '', component: BasicComponent,
    children: [
      { path: 'companies', component: CompaniesComponent },
      { path: 'epis', component: PPEComponent },
      { path: 'myconstructionsites', component: MyConstructionSitesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'repositories', component: RepositoriesComponent },
      { path: 'thirdparties', component: ThirdPartiesComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'workers', component: WorkersComponent },
    ]
   },
  {
    path: '', component: BlankComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
   },

  // Handle all other routes
  { path: '**', redirectTo: '/myconstructionsites', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
