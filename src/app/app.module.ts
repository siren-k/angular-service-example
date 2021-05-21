import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { ComponentLevel1Component } from './component-level1/component-level1.component';
import { ComponentLevel2Component } from './component-level2/component-level2.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HomeComponent,
    ComponentLevel1Component,
    ComponentLevel2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
