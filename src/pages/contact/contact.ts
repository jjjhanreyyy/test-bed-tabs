import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  page = 'ContactPage';

  constructor(private navCtrl: NavController) { }

  ionViewCanEnter(): boolean {
    console.log(`${this.page} can enter`);
    return true;
  }

  ionViewCanLeave(): boolean {
    console.log(`${this.page} can leave`);
    return true;
  }

  ionViewWillEnter() {
    console.log(`${this.page} will enter`);
  }

  ionViewDidEnter() {
    console.log(`${this.page} did enter`);
  }

  ionViewWillLeave() {
    console.log(`${this.page} will leave`);
  }

  ionViewDidLeave() {
    console.log(`${this.page} did leave`);
  }
}
