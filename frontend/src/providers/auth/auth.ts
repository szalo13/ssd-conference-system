import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../app/environments/environment';

import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public authService:Angular2TokenService) {
    this.authService.init(environment.token_auth_config);
    this.authService.validateToken().subscribe(
      res => res.status == 200 ? this.userSignedIn$.next(res.json().success): this.userSignedIn$.next(false)
    )
  }

  logOutUser():Observable<Response>{

    return this.authService.signOut().map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
    );
  }

  registerUser(signUpData:  {
    email:string,
    password:string,
    passwordConfirmation:string}):Observable<Response>{
     return this.authService.registerAccount(signUpData).map(
         res => {
           this.userSignedIn$.next(true);
           console.log(res);
           return res
         },
         err => {
           console.log(err);
         }
     );
   }

   logInUser(signInData: {
     email:string,
     password:string}):Observable<Response>{

     return this.authService.signIn(signInData).map(
         res => {
           this.userSignedIn$.next(true);
           return res
         },
         err => {
           console.log(err);
         }
     );
   }
}
