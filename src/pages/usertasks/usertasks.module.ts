import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsertasksPage } from './usertasks';

@NgModule({
  declarations: [
    UsertasksPage,
  ],
  imports: [
    IonicPageModule.forChild(UsertasksPage),
  ],
})
export class UsertasksPageModule {}
