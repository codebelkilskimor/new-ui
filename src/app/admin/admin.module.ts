import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CardsComponent } from './components/cards/cards.component';
import { TablaRankingComponent } from './components/tabla-ranking/tabla-ranking.component';
import { TablaReportesComponent } from './components/tabla-reportes/tabla-reportes.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { NavbarSearchComponent } from './components/navbar-search/navbar-search.component';
import { SearcherBComponent } from './pages/searcher-b/searcher-b.component';
import { TablaSearchComponent } from './components/tabla-saerch/tabla-search.component';
import { TablaProyectoComponent } from './components/tabla-proyecto/tabla-proyecto.component';
import { ResultadosBusquedaComponent } from './components/resultados-busqueda/resultados-busqueda.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NoResultadosComponent } from './components/no-resultados/no-resultados.component';
import { DialogDetalleProyectoComponent } from './dialogs/dialog-detalle-proyecto/dialog-detalle-proyecto.component';
import { TablaInvestigadoresComponent } from './components/tabla-investigadores/tabla-investigadores.component';
import { DialogDetalleInvestigadorComponent } from './dialogs/dialog-detalle-investigador/dialog-detalle-investigador.component';
import { ProyectosProcesoTerminadosComponent } from './components/graficos/proyectos-proceso-terminados/proyectos-proceso-terminados.component';
import { PresupuestoProyectosPorMesComponent } from './components/graficos/presupuesto-proyectos-por-mes/presupuesto-proyectos-por-mes.component';
import { ProyectosSemilleroGradoComponent } from './components/graficos/proyectos-semillero-grado/proyectos-semillero-grado.component';

@NgModule({
  declarations: [
    HomeComponent,
    ReportsComponent,
    NavegacionComponent,
    CardsComponent,
    TablaRankingComponent,
    TablaReportesComponent,
    TablaProyectoComponent,
    TablaSearchComponent,
    SearcherComponent,
    NavbarSearchComponent,
    SearcherBComponent,
    ResultadosBusquedaComponent,
    PaginationComponent,
    NoResultadosComponent,
    DialogDetalleProyectoComponent,
    TablaInvestigadoresComponent,
    DialogDetalleInvestigadorComponent,
    ProyectosProcesoTerminadosComponent,
    PresupuestoProyectosPorMesComponent,
    ProyectosSemilleroGradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    NgChartsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
