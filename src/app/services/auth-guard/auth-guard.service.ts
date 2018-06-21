import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url = state.url;
    // console.log(url);
    const isUrlPublic = ['/sign-in', '/sign-up'].includes(url);

    if (!this.isLogged() && !isUrlPublic) {
      this.router.navigate(['/sign-in']);
    } else if (this.isLogged() && isUrlPublic) {
      this.router.navigate(['/']);
    }

    return this.isLogged();
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }
}
