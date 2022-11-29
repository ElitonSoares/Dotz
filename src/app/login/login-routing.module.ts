import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModelComponent } from './login-model/login-model.component';
import { EnterComponent } from './enter/enter.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginModelComponent,
    children: [
      {
        path: '',
        redirectTo: 'enter',
        pathMatch: 'full'
      },
      {
        path: 'enter',
        component: EnterComponent,
      },
      {
        path: 'registrar',
        component: RegistrarComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
