import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})

export class LoggedComponent implements OnInit {

  get userLogged(){
    return JSON.parse(sessionStorage.getItem('userLogged') as string);
  }

  theUrlApi: ['https://60a3b88c7c6e8b0017e27b18.mockapi.io/dotz'] | undefined

  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
  };

  enter(){
    this.router.navigate(['logged']);
  };

  logOut(){
    sessionStorage.removeItem('userLogged');
    this.router.navigate(['login']);
  };

}


