import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let valid = false;
    if (sessionStorage.getItem('userLogged')) {
      valid = true;
    } else{
      this.router.navigate(['login']);
    }
    return valid;
  }
}
