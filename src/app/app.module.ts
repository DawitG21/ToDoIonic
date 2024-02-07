import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { UsertasksPage } from '../pages/usertasks/usertasks';
import { TodoProvider } from '../providers/todo/todo';
import { ModalpagePage } from '../pages/addpage/modalpage';
import { EdittaskPage } from '../pages/edittask/edittask';
import { CompletePage } from '../pages/complete/complete';
import { ContactusPage } from '../pages/contactus/contactus';
import { SettingsPage } from '../pages/settings/settings';
import { UncompletedPage } from '../pages/uncompleted/uncompleted';
import { VersionPage } from '../pages/version/version';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SignupPage,
    LoginPage,
    UsertasksPage,
    ModalpagePage,
    EdittaskPage,
    CompletePage,
    ContactusPage,
    SettingsPage,
    UncompletedPage,
    VersionPage,
    AboutPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), BrowserAnimationsModule ,FormsModule ,HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SignupPage,
    LoginPage,
    UsertasksPage,
    ModalpagePage,
    EdittaskPage,
    CompletePage,
    ContactusPage,
    SettingsPage,
    UncompletedPage,
    VersionPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider
  ]
})
export class AppModule {}
