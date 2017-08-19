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

  constructor(public navCtrl: NavController) { }

  openChild() {
    this.navCtrl.push('ChildPage');
  }
}
