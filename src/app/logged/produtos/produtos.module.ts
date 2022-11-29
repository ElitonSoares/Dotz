import { ProdutosDetalhadosComponent } from './produtos-detalhados/produtos-detalhados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import {MatGridListModule} from '@angular/material/grid-list';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations:
  [
    ListaProdutosComponent,
    ProdutosDetalhadosComponent,
    PedidosComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers:[

  ]
})
export class ProdutosModule { }
