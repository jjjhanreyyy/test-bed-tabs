import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page = 'HomePage';

  press: number = 0;
  pan: number = 0;
  swipe: number = 0;
  tap: number = 0;

  isPaused: boolean;

  constructor(private alertCtrl: AlertController) {}

  pressEvent(e) {
    this.press++;
  }

  panEvent(e) {
    this.pan++;
  }

  swipeEvent(e) {
    this.swipe++;
  }

  tapEvent(e) {
    this.tap++;
  }

  testAlert() {
    let alert = this.alertCtrl.create({
      title: 'Request Appointment',
      message:
        'Are you sure you would like to request an appointment on the date below?',
      inputs: [
        {
          name: 'date',
          disabled: true,
          value: '12/12/2017'
        },
        {
          type: 'tel',
          name: 'date',
          disabled: false,
          value: '920.988.4261'
        },
        {
          name: 'hour',
          disabled: false,
          value: '10:00'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Request'
        }
      ]
    });
    alert.present();
  }
}
