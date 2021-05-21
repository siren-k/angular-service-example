import { Component, OnInit } from '@angular/core';
import { Log3Service } from '../log3.service';

@Component({
  selector: 'app-module-level1',
  templateUrl: './module-level1.component.html',
  styleUrls: ['./module-level1.component.css']
})
export class ModuleLevel1Component implements OnInit {

  constructor(private log: Log3Service) {

  }

  ngOnInit(): void {
    this.log.info('module level 1');
  }

}
