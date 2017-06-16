import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTabComponent } from './menu-tab';

@NgModule({
  declarations: [
    MenuTabComponent,
  ],
  imports: [
    IonicPageModule.forChild(MenuTabComponent),
  ],
  exports: [
    MenuTabComponent
  ]
})
export class MenuTabComponentModule {}
