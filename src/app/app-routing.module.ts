import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PublicGuard} from "./guardians/public.guard";
import {LoginComponent} from "./components/session/login/login.component";
import {PrivateGuard} from "./guardians/private.guard";
import {PolicyComponent} from "./components/session/policy/policy.component";
import {ReportsComponent} from "./components/reports/reports.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicGuard],
  },
  {
    path: 'policy',
    component: PolicyComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PrivateGuard],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [PrivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
