import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { CalculateProvider } from '../../providers/calculate/calculate';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  value1: number;
  value2: number;
  result: number;

  constructor(private calculator: CalculateProvider) { }

  doSum(): void {
    this.result = this.calculator.sum(this.value1, this.value2);
  }

  doDifference(): void {
    this.result = this.calculator.diff(this.value1, this.value2);
  }

}
