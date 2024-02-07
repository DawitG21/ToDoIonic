import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage }  from '../home/home';
import { UsertasksPage } from '../usertasks/usertasks'; 
import { MainPage } from '../main/main';
import { Itask } from '../../providers/todo/itask';
import { TodoProvider } from '../../providers/todo/todo';
import { OtherTask } from '../../providers/todo/itaskT';
import { AlertController } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
 

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login', 
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  check : Itask[];
  userpassid : Itask;
  counter=0;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
     public todoProvider : TodoProvider , public alertCtrl: AlertController) {
      this.userpassid = new OtherTask();
      this.userpassid.FullName ='';
  }

  ngOnInit(): void {
    this.todoProvider.getUser()
    .subscribe((alltasks)=>{this.check = alltasks});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  homepage(){
    this.navCtrl.push(HomePage);
  }
  goToTasksPage(){
    this.navCtrl.push(UsertasksPage);
  }

  onBackButton(){
    this.navCtrl.push(MainPage);
  }
  
  backToPage(){
    this.navCtrl.push(SignupPage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Account Not Existing !',
      subTitle: 'Please Register Your User Name',
      buttons: ['OK']
    });
    alert.present();
  } 

  showAlert1() {
    const alert = this.alertCtrl.create({
      title: 'Empty User ID',
      subTitle: 'Please Register Your User Name',
      buttons: ['OK']
    });
    alert.present();
  } 

  onCreatingNewUser(){
    for(let i=0;i<this.check.length;i++){
    if(this.check[i].FullName==this.userpassid.FullName){
      this.counter++;
    }
    }

    if(this.counter!=0){
      console.log("found");
      this.navCtrl.push(UsertasksPage);
      this.counter=0;
    }
    
  else{
    console.log("I Mean IT");
    this.showAlert();
    this.navCtrl.push(SignupPage);
      this.counter=0;
  } 
  }

/*   onEmpty(){
    if( this.userpassid.FullName == ''){
      this.backToPage();
    } */
  }
