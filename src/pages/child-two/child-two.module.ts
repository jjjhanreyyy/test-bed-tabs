import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildTwoPage } from './child-two';

@NgModule({
  declarations: [
    ChildTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildTwoPage),
  ],
})
export class ChildTwoPageModule {}
