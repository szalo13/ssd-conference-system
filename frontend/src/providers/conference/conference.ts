import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../app/environments/environment';

/*
  Generated class for the ConferenceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConferenceProvider {

  baseUrl: string = environment.conference_config.apiBase;

  constructor(public http: Http) {

    console.log('Hello ConferenceProvider Provider');
  }

  getAllConferences() {
    return this.http.get(this.baseUrl + ".json");
  }

  createNewConference() {

  }
}
