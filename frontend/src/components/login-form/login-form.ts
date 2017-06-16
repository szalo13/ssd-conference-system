import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "../../app/environments/environment";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html',
  providers: [ AuthProvider ]
})
export class LoginFormComponent {

  @Output() onFormResult = new EventEmitter<any>();
  form: FormGroup;
  signInData = {
    email: '',
    password: ''
  }

  subscription: Subscription;

  constructor(
    public authProvider: AuthProvider,
    @Inject(FormBuilder) fb: FormBuilder) {

      this.form = fb.group({
        email: ['', Validators.email],
        password: ['', [Validators.minLength(5), Validators.required]]
      });
      this.subscription = this.authProvider.getAuthentication().subscribe(message => (console.log(message)));
  }

  onSignInSubmit() {
    this.authProvider.logInUser(this.signInData).subscribe(
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
