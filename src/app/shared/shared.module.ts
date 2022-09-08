import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [
    LoaderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
