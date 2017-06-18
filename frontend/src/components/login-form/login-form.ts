import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { environment } from "../../app/environments/environment";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs/Subscription';

import { ProfilePage } from '../../pages/profile/profile';

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

  constructor(
    public authProvider: AuthProvider,
    public navCtrl: NavController,
    @Inject(FormBuilder) fb: FormBuilder) {

      this.form = fb.group({
        email: ['', Validators.email],
        password: ['', [Validators.minLength(5), Validators.required]]
      });
  }

  onSignInSubmit() {
    this.authProvider.logInUser(this.signInData).subscribe(
      res => {
        if(res.status == 200) {
          this.authProvider.userSignedIn$.next(true);
          this.navCtrl.setRoot(ProfilePage);
        }
      },

      err => {
        console.error('auth error:', err);
      }
  )
  }
}
