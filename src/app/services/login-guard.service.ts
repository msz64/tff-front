import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if(!this._authService.token) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
