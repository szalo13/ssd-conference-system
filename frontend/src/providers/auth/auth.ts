import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
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
  subject = new Subject<any>();

  constructor(public http: Http, public tokenService:Angular2TokenService) {
    this.tokenService.init(environment.token_auth_config);
    this.tokenService.validateToken().subscribe(
      res => res.status == 200 ? this.userSignedIn$.next(true) : this.userSignedIn$.next(false)
    )
    console.log('user is already signed or not: ');
    console.log(this.tokenService.userSignedIn());
  }

  logOutUser():Observable<Response>{
    console.log('logOut -> false');
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
    passwordConfirmation:string,
    name: string,
    userType: string}):Observable<Response>{

     return this.tokenService.registerAccount(signUpData).map(
         res => {
           console.log(res);
           console.log('register user -> true');
           this.userSignedIn$.next(true);
           return res
         },
         err => {
           console.log('register user -> false');
           this.userSignedIn$.next(false);
         }
     );
   }

   logInUser(signInData: {
     email:string,
     password:string}):Observable<Response>{
     return this.tokenService.signIn(signInData).map(
         res => {
           console.log(res);
           this.userSignedIn$.next(true);
           return res;
         },
         err => {
           console.log('logIn user -> false');
           console.log(err);
           this.userSignedIn$.next(false);
         }
     );
   }

  //  registerNewUser(signUpData) {
   //
  //    let headers = new Headers({
  //      'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin' : '*'});
  //    let options = new RequestOptions({ headers: headers });
   //
  //    signUpData = JSON.stringify(signUpData);
   //
  //     console.log(signUpData);
  //
  //    return this.http.post(environment.token_auth_config.apiBase + "/auth/sign_up", signUpData, options)
  //  }

   getUserInfo() {
     return this.tokenService.currentUserData;
   }

   userSignedIn() {
     return this.tokenService.userSignedIn();
   }

   getAuthentication(): Observable<any> {
           return this.userSignedIn$.asObservable();
    }
}
