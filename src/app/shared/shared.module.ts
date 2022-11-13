import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    FiltersComponent,
    AlertasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [
    LoaderComponent,
    NavbarComponent,
    FiltersComponent
  ]
})
export class SharedModule { }
