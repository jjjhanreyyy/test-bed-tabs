import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as moment from 'moment';

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
  otherDate: string;
  startDate: string = moment().format('YYYY-MM-DDTHH:mm:ssZ');

  constructor(public navCtrl: NavController) { }

  ionViewDidEnter() { console.log(this.constructor.name, 'ionViewDidEnter'); }
  ionViewDidLoad() { console.log(this.constructor.name, 'ionViewDidLoad'); }

  openChild(pg: string) { this.navCtrl.push(pg); }

  logDate() {
    const m = moment(this.otherDate);
    console.log(this.otherDate);
    console.log(m.format('YYYY-MM-DD HH:mm:ss'));
  }
}
