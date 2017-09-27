import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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

  constructor() { }

  pressEvent(e) {
    this.press++
  }

  panEvent(e) {
    this.pan++
  }

  swipeEvent(e) {
    this.swipe++
  }

  tapEvent(e) {
    this.tap++
  }
}
