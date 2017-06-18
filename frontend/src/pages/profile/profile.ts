import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs/Subscription';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  isLogedIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {


    if (this.authProvider.getUserInfo()) {
      this.isLogedIn = true;
    } else {
      this.isLogedIn = false;
    }
  }

  logOutUser() {
    this.authProvider.logOutUser();
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
