import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import {Feature2} from "./feature2.component";


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Feature2,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
