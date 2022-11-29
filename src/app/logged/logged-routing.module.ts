import { PedidosComponent } from './produtos/pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';

const routes: Routes = [

  {
    path:'',
    component: LoggedComponent,
    children: [
      {
        path: '',
          loadChildren: () => import('../home/home.module').then(x => x.HomeModule),
      },
      {
        path: 'produtos',
        loadChildren: () => import('./produtos/produtos.module').then(x => x.ProdutosModule),
      },
      {
        path:'perfil',
        component: PerfilComponent,
      },
      {
        path:'pedidos',
        component: PedidosComponent,
      },

     ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
