import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/serviços/login.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  formulario: FormGroup;

  userLogged = JSON.parse(sessionStorage.getItem('userLogged') as string);

  theUrlApi: ['https://60a3b88c7c6e8b0017e27b18.mockapi.io/dotz'] | undefined;

  submitted: boolean = false;

  deleteModalRef: BsModalRef | undefined;

  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private modal: AlertModalService
  ) {
    this.formulario = this.formBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      id: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    const userLogged$ = this.loginService.loadById(this.userLogged.id);
    userLogged$.subscribe((userLogged) => {
      this.formulario.patchValue(userLogged);
    });
  }

  edit() {
    if (this.formulario.valid) {
      this.loginService
        .edit(this.formulario.value, this.userLogged.id)
        .subscribe(
          (data) => {
            this.modal.showAlertSuccess('Dados atualizados com sucesso!');
            this.router.navigate(['logged']);
          },
          (error) => {
            this.modal.showAlertDanger('Erro ao atualizar dados!');
          }
        );
    }
  }
  fecharConta() {
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  onConfirmDelete() {
    this.loginService.remove(
      this.formulario.value, this.userLogged.id).subscribe(
        (data) => {
          this.modal.showAlertSuccess('Você não é mais um cliente DOTZ');
        },
        (error) => {
          this.modal.showAlertDanger('Erro ao encerrar conta DOTZ!');
        }
      );

  }

  onDeclineDelete(){
    this.deleteModalRef?.hide();
  }
}
