import { LoginService } from 'src/app/serviços/login.service';
import { SalesService } from './../../../serviços/sales.service';
import { ProdutosService } from 'src/app/serviços/produtos.service';
import { interfaceProduto } from './../interfaces/interfaceProduto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-produtos-detalhados',
  templateUrl: './produtos-detalhados.component.html',
  styleUrls: ['./produtos-detalhados.component.scss'],
})
export class ProdutosDetalhadosComponent implements OnInit {
  produto: interfaceProduto | undefined;
  produtId: any;
  userLogged = JSON.parse(sessionStorage.getItem('userLogged') as string);

  constructor(
    private activateRoute: ActivatedRoute,
    private produtosService: ProdutosService,
    private salesService: SalesService,
    private modal: AlertModalService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.produtId = params['id'];
      this.produtosDetalhes();
    });
  }

  back() {
    window.history.back();
  }

  produtosDetalhes() {
    this.produtosService
      .getProdutosDetalhes(this.produtId)
      .subscribe((data) => {
        this.produto = data;
      });
  }

  trocar() {
    var trocar = {
      idUser: this.userLogged.id,
      idProduct: this.produtId,
      price: this.produto?.price,
      data: new Date(),
      status: 'Em processamento',
    };
    this.salesService.venda(trocar).subscribe((data) => {
      this.userLogged.balance = this.userLogged.balance  - (this.produto?.price as number);
      this.loginService.edit(this.userLogged, this.userLogged.id).subscribe((data) => {
        sessionStorage.setItem('userLogged', JSON.stringify(data));
        this.modal.showAlertSuccess('Compra feita!');
      });
    });
  }


}
