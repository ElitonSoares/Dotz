import { LoginService } from './../../serviços/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {

  formulario: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService
  ) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.formulario.get('email')!;
  }

  get password() {
    return this.formulario.get('password')!;
  }

  fazerLogin() {
    if (!this.formulario.valid) {
    }
    this.loading = true;
    this.loginService.fazerLogin().subscribe((data) => {
      this.loading = false;
      let usuarioEncontrado = false;
      data.forEach((element) => {
        if (
          element.email === this.formulario.value.email &&
          element.password === this.formulario.value.password
        ) {
          sessionStorage.setItem('userLogged', JSON.stringify(element));
          usuarioEncontrado = true;
          this.router.navigate(['logged']);
        }
      });
      if (!usuarioEncontrado){
        return
      };
    });
  }
}
