import { Component, OnInit } from '@angular/core';
import { Log1Service } from '../log1.service';
import { Log3Service } from '../log3.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private log1: Log1Service, private log3: Log3Service) {

  }

  ngOnInit(): void {
    this.log1.info('Home');
    this.log3.info('Home');
  }

}
