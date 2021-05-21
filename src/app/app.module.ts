import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { ComponentLevel1Component } from './component-level1/component-level1.component';
import { ComponentLevel2Component } from './component-level2/component-level2.component';
import { ModuleLevel1Component } from './module-level1/module-level1.component';
import { ModuleLevel2Component } from './module-level2/module-level2.component';
import { Log3Service } from './log3.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HomeComponent,
    ComponentLevel1Component,
    ComponentLevel2Component,
    ModuleLevel1Component,
    ModuleLevel2Component,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Log3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
