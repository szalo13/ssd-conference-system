import { Component } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Http } from '@angular/http';
import { environment } from "../../app/environments/environment";

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers: [ Angular2TokenService ]
})
export class LoginComponent {

  text: string;
  title = 'app works!';

  constructor(
    private authToken: Angular2TokenService,
    private http: Http) {
    console.log('Hello LoginComponent Component');
    this.authToken.init(environment.token_auth_config);

    this.authToken.signIn({email: "user@example.com", password: "monkey67"}).subscribe(
      res => {

        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
        console.log('auth response body:', res.json()); //log the response body to show the user
      },

      err => {
        console.error('auth error:', err);
      }
  )
    this.text = 'Hello World';
  }

}
