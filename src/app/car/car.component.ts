import { Component, OnInit } from '@angular/core';

class EngineService {
  public start(): void {
    console.log('엔진 스타트');
  }
}

class WheelService {
  public start(): void {
    console.log('바퀴 스타트');
  }
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  private engine = new EngineService();
  private wheel = new WheelService();

  constructor() { }

  ngOnInit(): void {
    this.engine.start();
    this.wheel.start();
  }

}
