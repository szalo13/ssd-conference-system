import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConferenceProvider } from '../../providers/conference/conference';

/**
 * Generated class for the ConferenceAddFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'conference-add-form',
  templateUrl: 'conference-add-form.html',
  providers: [ ConferenceProvider ]
})
export class ConferenceAddFormComponent {

  conference = {
    id: 0,
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    isPrivate: false,
    created_at: "",
    updated_at: "",
    url: "",
  }

  name: string;
  description: string;
  startTime: string;
  endTime: string;

  conferenceForm: FormGroup;

  constructor( public conferenceProvider: ConferenceProvider, @Inject(FormBuilder) fb: FormBuilder) {

    this.conferenceForm = fb.group({
      name: ['', [Validators.minLength(5), Validators.required]],
      description: ['', [Validators.minLength(5), Validators.required]],
      startTime: ['', Validators.nullValidator],
      endTime: ['', Validators.nullValidator ],
      isPrivate: ['', Validators.nullValidator]
  });
  }

  addNewConference() {
    this.conference.name = this.conferenceForm.value.name;
    this.conference.description = this.conferenceForm.value.description;
    this.conference.startTime = this.conferenceForm.value.startTime;
    this.conference.endTime = this.conferenceForm.value.endTime;
    this.conference.isPrivate = this.conferenceForm.value.isPrivate;
    this.conference.created_at =  new Date().toString();
    this.conference.updated_at =  new Date().toString();

    this.conferenceProvider.addNewConference(this.conference).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );

    console.log(this.conference);
  }
}
