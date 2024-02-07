import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { Itask } from '../../providers/todo/itask';


/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html',
})
export class CompletePage implements OnInit {
  tasks: Itask[];
  counter = 0;
  complitedTasks : Itask[];


  constructor(public navCtrl: NavController, public navParams: NavParams , public todoProvider : TodoProvider) {
  }

  ngOnInit(): void {

    this.todoProvider.getTask()
    .subscribe((alltasks) => { 
      this.tasks = alltasks 

    });
       /* for(let i=0 ; i<this.tasks.length; i++){
      if(this.tasks[i].Status == true){
        this.complitedTasks.push(this.tasks[i]);
      }
    }  */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletePage');
  }

}


