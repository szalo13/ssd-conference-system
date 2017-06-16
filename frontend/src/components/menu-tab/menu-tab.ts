import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ConferencePage } from '../../pages/conference/conference';
import { ProfilePage } from '../../pages/profile/profile';

import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the MenuTabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'menu-tab',
  templateUrl: 'menu-tab.html'
})
export class MenuTabComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  authenticateSubscription = new Subscription;
  pages: Array<{title: string, component: any}>;
  isLogedIn = false;
  authorized = "";

  constructor(public authProvider: AuthProvider) {
    this.setAuth(this.authProvider.userSignedIn());
    this.authenticateSubscription = this.authProvider.getAuthentication().subscribe( message => this.setAuth(message));

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Conference', component: ConferencePage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  setAuth(message) {
    console.log('seth Auth');
    if (message) {
      this.authorized = "authorized";
    } else {
        this.authorized = "";
    }
  }

  logOutUser() {
    this.authProvider.logOutUser();
  }
}