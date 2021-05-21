import { Component, OnInit } from '@angular/core';
import { Log2Service } from '../log2.service';

@Component({
  selector: 'app-component-level1',
  templateUrl: './component-level1.component.html',
  styleUrls: ['./component-level1.component.css'],
  providers: [Log2Service]
})
export class ComponentLevel1Component implements OnInit {

  constructor(private log: Log2Service) {

  }

  ngOnInit(): void {
    this.log.info('component level 1');
  }

}
