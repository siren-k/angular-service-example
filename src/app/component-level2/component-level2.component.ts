import { Component, OnInit } from '@angular/core';
import { Log2Service } from '../log2.service';

@Component({
  selector: 'app-component-level2',
  templateUrl: './component-level2.component.html',
  styleUrls: ['./component-level2.component.css'],
  providers: [Log2Service]
})
export class ComponentLevel2Component implements OnInit {

  constructor(private log: Log2Service) {

  }

  ngOnInit(): void {
    this.log.info('component level 2');
  }

}
