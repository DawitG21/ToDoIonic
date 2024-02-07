import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UncompletedPage } from './uncompleted';

@NgModule({
  declarations: [
    UncompletedPage,
  ],
  imports: [
    IonicPageModule.forChild(UncompletedPage),
  ],
})
export class UncompletedPageModule {}
