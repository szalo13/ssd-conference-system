import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenceAddFormComponent } from './conference-add-form';

@NgModule({
  declarations: [
    ConferenceAddFormComponent,
  ],
  imports: [
    IonicPageModule.forChild(ConferenceAddFormComponent),
  ],
  exports: [
    ConferenceAddFormComponent
  ]
})
export class ConferenceAddFormComponentModule {}
