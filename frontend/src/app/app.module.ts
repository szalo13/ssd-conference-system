import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthProvider } from '../providers/auth/auth';
import { Angular2TokenService } from 'angular2-token';
import { GuardProvider } from '../providers/guard/guard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginFormComponent } from '../components/login-form/login-form';
import { RegisterFormComponent } from '../components/register-form/register-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
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
