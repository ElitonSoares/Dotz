import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'logged',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./logged/logged.module').then((x) => x.LoggedModule),
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./login/login.module').then((x) => x.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
