import { Sales } from './../interfaces/sales';
import { SalesService } from './../../../serviços/sales.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/serviços/login.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  pedidos: any;
  userLogged = JSON.parse(sessionStorage.getItem('userLogged') as string);

  deleteModalRef: BsModalRef | undefined;

  @ViewChild('deleteModal') deleteModal: any;
  pedido: Sales | undefined;

  constructor(
    private salesService: SalesService,
    private modalService: BsModalService,
    private modal: AlertModalService
  ) {}

  ngOnInit(): void {
    this.getSales();
  }
  getSales() {
    this.salesService.getSales().subscribe((data) => {
      let user = this.userLogged;
      this.pedidos = data.filter(function (ped) {
        return ped.idUser === user.id;
      });
    });
  }
  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }
  onConfirmDelete() {
    this.salesService
      .remove(this.pedido?.id)
      .subscribe(
        (data) => {
          this.modal.showAlertSuccess('Pedido cancelado, com sucesso!');
          this.getSales();
        },
        (error) => {
          this.modal.showAlertDanger('Não foi possível cancelar o pedido!');
        }
      );
  }
  cancelarPedido(pedido: Sales) {
    this.pedido = pedido;

    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }
}
