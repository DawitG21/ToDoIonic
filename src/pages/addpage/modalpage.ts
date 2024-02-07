import { Component , OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { Itask } from '../../providers/todo/itask';
import { OtherTask } from '../../providers/todo/itaskT';
import { TodoProvider } from '../../providers/todo/todo';
import { UsertasksPage } from '../usertasks/usertasks';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage implements OnInit{
  ngOnInit(): void {
    this.todoProvider.getTask()
    .subscribe((alltasks)=>{this.tasks = alltasks})
  }
  tasks : Itask[];
  addtask :Itask;

  constructor(public navCtrl: NavController, public navParams: NavParams , public viewController : ViewController ,
  public todoProvider : TodoProvider , public toastCtrl: ToastController) {

    this.addtask = new OtherTask();
    this.addtask.Task ='';
    this.addtask.UserID=1;
    this.addtask.ID=1;

  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Task added successfully',
      duration: 3000,
      position : "top"
    });
    toast.present();
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpagePage');
  }


  onCreatingNewTask(){
    this.todoProvider.createTask(this.addtask)
    .subscribe(res=>{console.log(res);})
  }
  onBackButton(){
    this.navCtrl.push(UsertasksPage);
  }
}
