import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'child',
  defaultHistory: ['AboutPage']
})
@Component({
  selector: 'page-child',
  templateUrl: 'child.html'
})
export class ChildPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() { console.log(this.constructor.name, 'ionViewDidEnter'); }
  ionViewDidLoad() { console.log(this.constructor.name, 'ionViewDidLoad'); }

  openChild(pg: string) { this.navCtrl.push(pg); }
}
