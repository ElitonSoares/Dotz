import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule,} from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';




@NgModule({
  declarations: [LoggedComponent, PerfilComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class LoggedModule { }
