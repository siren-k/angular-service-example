import { Component, OnInit } from '@angular/core';
import { Log3Service } from '../log3.service';

@Component({
  selector: 'app-module-level2',
  templateUrl: './module-level2.component.html',
  styleUrls: ['./module-level2.component.css']
})
export class ModuleLevel2Component implements OnInit {

  constructor(private log: Log3Service) {

  }

  ngOnInit(): void {
    this.log.info('module level 2');
  }

}
