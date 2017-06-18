import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../app/environments/environment';
import { Conference } from '../../models/conference';

/*
  Generated class for the ConferenceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConferenceProvider {

  baseUrl: string = environment.conference_config.apiBase;

  constructor(public http: Http) {
  }

  getAllConferences() {
    return this.http.get(this.baseUrl + ".json");
  }

  addNewConference(conference) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + ".json", conference, options);
  }
}
