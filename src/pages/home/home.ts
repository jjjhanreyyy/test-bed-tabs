import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page = 'HomePage';

  public press: number = 0;
  public pan: number = 0;
  public pinch: number = 0;
  public rotate: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

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

  pinchEvent(e) {
    this.pinch++
  }

  rotateEvent(e) {
    this.rotate++
  }
}
