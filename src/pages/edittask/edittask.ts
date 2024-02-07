import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Itask } from '../../providers/todo/itask';
import { OtherTask } from '../../providers/todo/itaskT';
import { TodoProvider } from '../../providers/todo/todo';
import { UsertasksPage } from '../../pages/usertasks/usertasks';
/**
 * Generated class for the EdittaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edittask',
  templateUrl: 'edittask.html',
})
export class EdittaskPage implements OnInit{
 
  tasks : Itask[];
  addtask :Itask;
  selectedTask: Itask;
task : Itask;
user : Itask;
  selectedTask2: Itask;
  constructor(public navCtrl: NavController, public navParams: NavParams , public todoProvider :TodoProvider) {
    this.selectedTask=navParams.get('item');
    //this.selectedTask2=navParams.get('item2');
    this.addtask = new OtherTask();
    this.addtask.Task ='';
    this.addtask.UserID=1;
    this.addtask.ID=1;

    /* this.selectedTask = new OtherTask();
      this.selectedTask.Task = '';
      this.selectedTask.UserID = this.user.ID;
      this.selectedTask.ID;
      this.selectedTask.Priority= ''
      this.selectedTask.Status; */
  }
  ngOnInit(): void {
    /* this.selectedTask.ID=this.task.ID;
    this.selectedTask.Task = this.task.Task;
    this.selectedTask.UserID =this.task.UserID;
    this.selectedTask.Priority= this.task.Priority;
    this.selectedTask.Status =this.task.Status; */
    console.log(this.selectedTask.UserID);
    //console.log(this.selectedTask2.ID);
  }
/*   populatedData(addtask: Itask): void {

    this.selectedTask.Task = addtask.Task;
    this.selectedTask.UserID = addtask.UserID;
    this.selectedTask.ID = addtask.ID;
} */
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdittaskPage');
  }

  onEditTask():void {
    this.todoProvider.editTask(this.selectedTask)
    .subscribe(res =>{console.log(res);})
  }

  onBackButton(){
    this.navCtrl.push(UsertasksPage);
  }

}
