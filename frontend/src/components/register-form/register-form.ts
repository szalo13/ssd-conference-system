import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "../../app/environments/environment";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html',
  providers: [ AuthProvider ]
})
export class RegisterFormComponent {

  @Output() onFormResult = new EventEmitter<any>();
  signUpform: FormGroup;
  signUpData = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }
  message:String;

  constructor(
    public authProvider: AuthProvider,
    private http: Http,
    @Inject(FormBuilder) fb: FormBuilder) {

      this.signUpform = fb.group({
        email: ['', Validators.email],
        // TODO zmienic dlugosc walidacji
        password: ['', [Validators.minLength(1), Validators.required]],
        passwordConfirmation: ['', [Validators.minLength(8), Validators.required]]
      });
  }

  private onSignUpSubmit() {
    this.authProvider.registerUser(this.signUpData).subscribe(
      res => {
        if(res.status == 200) {
          this.message = "Success!";
          console.log("logged in");
          this.onFormResult.emit({signedUp: true, res});
        }
      },

      err => {
        let errBody = JSON.parse(err._body).errors.full_messages[0];
        if (errBody) {
          this.message = errBody;
        }
        this.onFormResult.emit({signedUp: true, err});
      }
    )
  }

  private displayConfirmationMessage () {

  }

}
