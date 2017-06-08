import { NgModule } from '@angular/core';
import { NavController } from 'ionic-angular'
import { Routes, RouterModule } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

import { HomePage } from '../pages/home/home';
import { RegisterFormComponent } from '../components/register-form/register-form';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: RegisterFormComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule{}
