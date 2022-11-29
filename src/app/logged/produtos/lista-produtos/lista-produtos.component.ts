import { interfaceProduto } from './../interfaces/interfaceProduto';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/serviços/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent implements OnInit {
  prodList: interfaceProduto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.obterTodosProdutos();
  }

  obterTodosProdutos() {
    this.produtosService.todosProdutos().subscribe((data) => {
      this.prodList = data;
    });
  }
}
