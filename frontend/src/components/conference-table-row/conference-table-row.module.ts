import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenceTableRowComponent } from './conference-table-row';

@NgModule({
  declarations: [
    ConferenceTableRowComponent,
  ],
  imports: [
    IonicPageModule.forChild(ConferenceTableRowComponent),
  ],
  exports: [
    ConferenceTableRowComponent
  ]
})
export class ConferenceTableRowComponentModule {}
