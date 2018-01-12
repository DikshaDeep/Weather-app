import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { CityComponent } from './city/city.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent, CityComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }