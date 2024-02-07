import { Component , OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { Itask } from '../../providers/todo/itask';

/**
 * Generated class for the UncompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uncompleted',
  templateUrl: 'uncompleted.html',
})
export class UncompletedPage implements OnInit {

  tasks : Itask[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoProvider : TodoProvider) {
  }

  ngOnInit(): void {
    
    this.todoProvider.getTask()
    .subscribe((alltasks)=>{this.tasks = alltasks})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UncompletedPage');
  }

}
