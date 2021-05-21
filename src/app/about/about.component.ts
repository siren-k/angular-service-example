import { Component, Inject, OnInit } from '@angular/core';
import { Log1Service } from '../log1.service';
import { FactoryService } from '../factory.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    Log1Service, 
    { provide: 'another', useClass: Log1Service }, 
    { provide:'same', useExisting: Log1Service },
    { provide: 'githuburl', useValue: 'https://github.com' },
    { provide: 'factory', useFactory: (logService: Log1Service) => {
        return new FactoryService(logService, new Boolean(true)); 
      },
      deps: [Log1Service]
    }
  ]
})
export class AboutComponent implements OnInit {

  constructor(private log1: Log1Service
    , @Inject('another') private log2: Log1Service
    , @Inject('same') private log3: Log1Service
    , @Inject('githuburl') private url: string
    , @Inject('factory') private factory: FactoryService) {
    console.log('log1 === log2', this.log1 === this.log2);
    console.log('log1 === log3', this.log1 === this.log3);
    console.log('github url ==> ', this.url);
    factory.log();
  }

  ngOnInit(): void {
    this.log1.info('About');
    this.log2.info('About');
  }

}
