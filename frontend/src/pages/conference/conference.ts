import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ConferenceProvider } from '../../providers/conference/conference';
import { ConferenceAddFormComponent } from '../../components/conference-add-form/conference-add-form';
import { ConferenceTableRowComponent } from '../../components/conference-table-row/conference-table-row';

/**
 * Generated class for the ConferencePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conference',
  templateUrl: 'conference.html',
})

export class ConferencePage {

  conferences: any;
  createNewMode: Boolean
  isLogedIn: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider, public conferenceProvider: ConferenceProvider) {

    this.createNewMode = false;

    if (this.authProvider.getUserInfo()) {
      this.isLogedIn = true;
    } else {
      this.isLogedIn = false;
    }

    conferenceProvider.getAllConferences().subscribe(
      res => {
        console.log(res);
        this.conferences = JSON.parse(res.text());
      }, err => {
        console.log(err);
      }
    );
  }

  toggleCreateMode() {
    if (this.createNewMode == false) {
      this.createNewMode = true;
    } else {
      this.createNewMode = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConferencePage');
  }
}
