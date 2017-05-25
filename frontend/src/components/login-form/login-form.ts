import { Component, Inject } from '@angular/core';
import { Angular2TokenService, SignInData } from "angular2-token";
import { Http } from '@angular/http';
import { environment } from "../../app/environments/environment";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  form: FormGroup;

  constructor(
    private authToken: Angular2TokenService,
    private http: Http,
    @Inject(FormBuilder) fb: FormBuilder) {

      this.form = fb.group({
        email: ['', Validators.email],
        password: ['', [Validators.minLength(5), Validators.required]]
      });
      this.authToken.init(environment.token_auth_config);
  }

  private signIn() {
    this.authToken.signIn({
      email: this.signInData.email,
      password: this.signInData.password
    }).subscribe(
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
