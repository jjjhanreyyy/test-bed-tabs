import { Injectable } from '@angular/core';

@Injectable()
export class CalculateProvider {

  constructor() { }

  diff(x: any, y: any): number {
    return parseInt(x) - parseInt(y);
  }

  sum(x: any, y: any): number {
    return parseInt(x) + parseInt(y);
  }
}
