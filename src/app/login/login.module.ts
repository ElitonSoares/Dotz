import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { EnterComponent } from './enter/enter.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginModelComponent } from './login-model/login-model.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EnterComponent,
    RegistrarComponent,
    LoginModelComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
