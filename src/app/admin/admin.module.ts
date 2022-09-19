import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgChartsModule } from 'ng2-charts';
import { TablaRankingComponent } from './components/tabla-ranking/tabla-ranking.component';
import { TablaReportesComponent } from './components/tabla-reportes/tabla-reportes.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { NavbarSearchComponent } from './components/navbar-search/navbar-search.component';
import { SearcherBComponent } from './pages/searcher-b/searcher-b.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportsComponent,
    NavegacionComponent,
    CardsComponent,
    TablaRankingComponent,
    TablaReportesComponent,
    SearcherComponent,
    NavbarSearchComponent,
    SearcherBComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class AdminModule { }
