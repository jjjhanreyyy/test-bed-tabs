import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'about-this-app'
})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  page = 'AboutPage';
  requestDate = new Date('2017-11-24').toISOString();

  constructor(public navCtrl: NavController) { }

  ionViewDidEnter() { console.log(this.constructor.name, 'ionViewDidEnter'); }
  ionViewDidLoad() { console.log(this.constructor.name, 'ionViewDidLoad'); }

  openChild(pg: string) { this.navCtrl.push(pg); }
}
