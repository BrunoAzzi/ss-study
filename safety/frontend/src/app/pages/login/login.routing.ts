import { Routes, RouterModule }  from '@angular/router';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { Login } from './login.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Login,
    children: [
      { path: 'coach', loadChildren: 'app/pages/coach/coach.module#CoachModule'  },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
