import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleModalComponent } from './pages/role-modal/role-modal.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    PolicyComponent,
    RoleModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    RoleModalComponent
  ],
})
export class LoginModule { }
