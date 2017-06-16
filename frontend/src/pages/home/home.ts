import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterFormComponent } from '../../compopnents/register-form/register-form';
import { LoginFormComponent } from '../../compopnents/login-form/login-form';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  i = 0;
  subscription = new Subscription;
  isLogedIn: Boolean;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    this.isLogedIn = this.authProvider.userSignedIn();
    this.subscription = this.authProvider.getAuthentication().subscribe( message => this.isLogedIn = message );
  }
}
