import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { CompletePage } from '../pages/complete/complete'; 
import { UncompletedPage } from '../pages/uncompleted/uncompleted'; 
import { SettingsPage } from '../pages/settings/settings';
import { ContactusPage } from '../pages/contactus/contactus';
import { AboutPage } from '../pages/about/about';
import { VersionPage } from '../pages/version/version';
import { MainPage } from '../pages/main/main';
import { UsertasksPage } from '../pages/usertasks/usertasks';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openCompletedPage(){
    this.nav.setRoot(CompletePage)
  }

  openUncompletedPage(){
    this.nav.setRoot(UncompletedPage);
  }

  openSettingsPage(){
    this.nav.setRoot(SettingsPage);
  }

  openContactUs(){
    this.nav.setRoot(ContactusPage);
  }

  openAboutUs(){
    this.nav.setRoot(AboutPage);
  }

  openVersion(){
    this.nav.setRoot(VersionPage);
  }
  
  openSignOut(){
    this.nav.setRoot(MainPage);
  }

  openHomePage(){
    this.nav.setRoot(UsertasksPage);
  }
}

