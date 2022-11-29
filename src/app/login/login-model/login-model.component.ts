import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enter(){
    this.router.navigate(['logged']);
  }

}
