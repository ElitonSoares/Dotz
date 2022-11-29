import { AlertModalService } from './../../shared/alert-modal.service';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/serviços/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {

  bsModalRef: BsModalRef | undefined;
  formulario: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private modal: AlertModalService
  ) {
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      balance: [100000],
    });
  }

  ngOnInit(): void {}
  get name() {
    return this.formulario.get('name')!;
  }
  get email() {
    return this.formulario.get('email')!;
  }
  get password() {
    return this.formulario.get('password')!;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      this.loginService.create(this.formulario.value).subscribe(
        (success) =>
          this.modal.showAlertSuccess('Usuario cadastrado com sucesso!'),
        (error) =>
          this.modal.showAlertDanger('Erro ao cadastrar, tente novamente!')
      );
    }
  }
  hasErrors(field: string) {
    return this.formulario.getError;
  }
}
