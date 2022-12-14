import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivateGuard } from '../guards/private.guard';
import { ReportsComponent } from './pages/reports/reports.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { SearcherBComponent } from './pages/searcher-b/searcher-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reportes',
    pathMatch: 'full',
  },
  {
    path: 'reportes',
    component: HomeComponent,
    canActivate: [PrivateGuard],
  },
  {
    path: 'dashboard',
    component: ReportsComponent,
    canActivate: [PrivateGuard],
  },
  {
    path: 'buscador-proyecto',
    component: SearcherComponent,
  },
  {
    path: 'buscador-investigador',
    component: SearcherBComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
