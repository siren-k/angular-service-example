import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Log1Service {
  private count = 0;

  constructor() { }

  public info(message: string): void {
    console.log('log1 >> info', message, this.count);
    this.count++;
  }

}
