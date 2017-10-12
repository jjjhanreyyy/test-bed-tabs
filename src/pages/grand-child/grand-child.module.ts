import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrandChildPage } from './grand-child';

@NgModule({
  declarations: [
    GrandChildPage,
  ],
  imports: [
    IonicPageModule.forChild(GrandChildPage),
  ],
})
export class GrandChildPageModule {}
