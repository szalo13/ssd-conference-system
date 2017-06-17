import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ConferenceProvider } from '../../providers/conference/conference';

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
  createNewMode: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider, public conferenceProvider: ConferenceProvider) {

    this.createNewMode = false;

    conferenceProvider.getAllConferences().subscribe(
      res => {
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
