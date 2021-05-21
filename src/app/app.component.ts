import { Component } from '@angular/core';
import { Log1Service } from './log1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service-example';

  constructor(private log: Log1Service) {
    this.log.info('Hello');
    this.log.info('Hello2');
  }

}
