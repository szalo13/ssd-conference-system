import { Component, Inject, Output, EventEmitter } from '@angular/core';
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

  form: FormGroup;
  signInData = {
    email: '',
    password: ''
  }
  @Output() onFormResult = new EventEmitter<any>();

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

  private onSignInSubmit() {
    this.authToken.signIn(this.signInData).subscribe(
      res => {
        if(res.status == 200) {
          console.log("logged in");
          this.onFormResult.emit({signedIn: true, res});
        }
      },

      err => {
        console.error('auth error:', err);
        this.onFormResult.emit({signedIn: false, err});
      }
  )
  }
}
