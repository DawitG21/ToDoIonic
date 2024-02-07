import { Component , ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MainPage } from '../main/main';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  @ViewChild(Slides) slides : Slides;
  skipMsg : string = "Skip";
  state : string = 'x';
  constructor(public navCtrl: NavController) {

  }

  skip(){ 
    this.navCtrl.push(MainPage);
  }

  slideChanged(){
    if (this.slides.isEnd())
      this.skipMsg = "Let's Get Started";
  }
  slideMoved(){
    if(this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
     this.state = 'rightSwipe';
    else
     this.state = 'leftSwipe';
  }
  animationDone(){
    this.state = 'x';
  }
}
