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
  userSignedIn:Boolean = false;
  subject = new Subject<any>();

  constructor(public tokenService:Angular2TokenService) {
    console.log(this.userSignedIn$);
    this.tokenService.init(environment.token_auth_config);
    this.tokenService.validateToken().subscribe(
      res => res.status == 200 ? this.userSignedIn$.next(true) : this.userSignedIn$.next(false)
    )
  }

  logOutUser():Observable<Response>{
    console.log('logOut');
      this.userSignedIn$.next(false);
    return this.tokenService.signOut().map(
        res => {
          return res;
        },
        err => {
          // Nie udalo sie wylogowac
        }
    );
  }

  registerUser(signUpData:  {
    email:string,
    password:string,
    passwordConfirmation:string}):Observable<Response>{
      console.log('register');
     return this.tokenService.registerAccount(signUpData).map(
         res => {
           this.userSignedIn$.next(true);
           return res
         },
         err => {
           this.userSignedIn$.next(false);
         }
     );
   }

   logInUser(signInData: {
     email:string,
     password:string}):Observable<Response>{
     return this.tokenService.signIn(signInData).map(
         res => {
           this.userSignedIn$.next(true);
           return res
         },
         err => {
           this.userSignedIn$.next(false);
         }
     );
   }

   sendFalse() {
     this.userSignedIn$.next(false);
   }

   sendTrue() {
     this.userSignedIn$.next(true);
   }

   sendMessage(message: string) {
         this.subject.next({ text: message });
     }

     getAuthentication(): Observable<any> {
       console.log('getAuthentication');
           return this.userSignedIn$.asObservable();
    }

   getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
