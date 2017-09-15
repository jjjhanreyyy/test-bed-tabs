import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'child',
  defaultHistory: ['AboutPage']
})
@Component({
  selector: 'page-child-two',
  templateUrl: 'child-two.html',
})
export class ChildTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() { console.log(this.constructor.name, 'ionViewDidEnter'); }
  ionViewDidLoad() { console.log(this.constructor.name, 'ionViewDidLoad');}
}
