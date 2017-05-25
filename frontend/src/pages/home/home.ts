import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../../components/login/login';
import { RegisterFormComponent } from '../../components/register-form/register-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
