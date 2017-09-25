import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  page = 'ContactPage';

  constructor() { }

  ionViewDidEnter() { console.log(this.constructor.name, 'ionViewDidEnter'); }
  ionViewDidLoad() { console.log(this.constructor.name, 'ionViewDidLoad');}
}
