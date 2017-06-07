import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

/*
  Generated class for the GuardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GuardProvider implements CanActivate {

  constructor(
    private tokenService: Angular2TokenService,
    private router: Router
  ) {}

  canActivate() {
    if (this.tokenService.userSignedIn()){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
