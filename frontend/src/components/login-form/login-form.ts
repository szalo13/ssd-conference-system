import { Component } from '@angular/core';
import { Angular2TokenService, SignInData } from "angular2-token";
import { Http } from '@angular/http';
import { environment } from "../../app/environments/environment";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html',
  providers: [ Angular2TokenService ]
})
export class LoginFormComponent {

  signInData: SignInData = <SignInData>{};
  email: SignInData;
  password: SignInData;

  constructor(
    private authToken: Angular2TokenService,
    private http: Http) {

    this.authToken.init(environment.token_auth_config);
  }

  private signIn() {
    this.authToken.signIn({email: this.signInData.email, password: this.signInData.password}).subscribe(
      res => {

        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
        console.log('auth response body:', res.json()); //log the response body to show the user
      },

      err => {
        console.error('auth error:', err);
      }
  )
  }
}
