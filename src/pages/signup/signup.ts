import { Component , OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TodoProvider } from '../../providers/todo/todo';
import { Itask } from '../../providers/todo/itask';
import { OtherTask } from '../../providers/todo/itaskT';
import { MainPage } from '../../pages/main/main';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  check : Itask[];
  userpassid : Itask;
  counter=0;

  constructor(public navCtrl: NavController, public navParams: NavParams , 
    public todoProvider : TodoProvider , public alertCtrl: AlertController) {

      this.userpassid = new OtherTask();
      this.userpassid.FullName ='';
    
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Add Your UserName',
      subTitle: 'Empty! You have to insert the Username request!',
      buttons: ['OK']
    });
    alert.present();
  }

  ngOnInit(): void {
    this.todoProvider.getUser()
    .subscribe((alltasks)=>{this.check = alltasks});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  logInPage(){
    this.navCtrl.push(LoginPage);
  }
  onCreatingNewUser(){
    for(let i=0;i<this.check.length;i++){
    if(this.check[i].FullName==this.userpassid.FullName){
      this.counter++;
    }
    }
    
    if(this.counter!=0){
      console.log("found");
      this.counter=0;
    }
    
  else{
    this.todoProvider.createUser(this.userpassid)
    .subscribe(res=>{console.log(res);})
    this.counter=0;
  }
  }
  
  empty(){
    if(this.userpassid.FullName == ''){
      this.showAlert();
    }
  }

  onBackButton(){
    this.navCtrl.push(MainPage);
  }

}
