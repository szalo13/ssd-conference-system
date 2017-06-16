import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ConferencePage } from '../pages/conference/conference';

import { LoginFormComponent } from '../components/login-form/login-form';
import { RegisterFormComponent } from '../components/register-form/register-form';

import { AuthProvider } from '../providers/auth/auth';
import { Angular2TokenService } from 'angular2-token';
import { GuardProvider } from '../providers/guard/guard';
import { MenuTabComponent } from '../components/menu-tab/menu-tab';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ConferencePage,

    LoginFormComponent,
    RegisterFormComponent,
    MenuTabComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ConferencePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Angular2TokenService,
    GuardProvider
  ]
})
export class AppModule {}
