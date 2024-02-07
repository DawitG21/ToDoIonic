import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { Itask } from '../../providers/todo/itask';
import { Platform, ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalpagePage } from '../addpage/modalpage';
import { EdittaskPage } from '../edittask/edittask';


/**
 * Generated class for the UsertasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usertasks',
  templateUrl: 'usertasks.html',
})
export class UsertasksPage implements OnInit {

  tasks: Itask[];
  addtask: Itask;
  selectedTask;
  user: Itask;
  updatedStatus: Itask;
  

  ngOnInit(): void {
    this.todoProvider.getTask()
      .subscribe((alltasks) => { this.tasks = alltasks })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private todoProvider: TodoProvider, public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController ,public platform: Platform,) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UsertasksPage');
  }

  presentActionSheet(task) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your TODO',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            /* console.log('Destructive clicked'); */
            this.todoProvider.deleteTask(task)
              .subscribe(res => {
                const index: number = this.tasks.indexOf(task);
                if (index !== -1) {
                  this.tasks.splice(index, 1);
                }
                /* this.successAlert(); */
                //this.deleteToast();
              }, err => console.log(err));
          }
        }, {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            const modal = this.modalCtrl.create(EdittaskPage, {
              item: task
            })
            modal.present();
          }
        }, {
          text: 'Done',
          icon: !this.platform.is('ios') ? 'checkmark-circle' : null,
          handler: () => {
            this.dawitStatus(task);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {

            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  addTaskPage() {
    this.navCtrl.push(ModalpagePage)
  }
  goToEditPage() {
    this.navCtrl.push(EdittaskPage);
  }
  onChange(finalizeTask:Itask) : void {
    this.todoProvider.updateTask(finalizeTask)
    .subscribe(res =>{console.log(res);})
  }
  dawitStatus(obj) {
    this.updatedStatus = obj;
    this.updatedStatus.Status = true;
    this.todoProvider.updateTask(this.updatedStatus)
      .subscribe(res => {
        res;
      })
  }
}

  
