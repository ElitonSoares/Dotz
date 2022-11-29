import { ProdutosDetalhadosComponent } from './produtos-detalhados/produtos-detalhados.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
 path: '',
 component: ListaProdutosComponent
},
{
  path:'detalhes/:id',
  component: ProdutosDetalhadosComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
