import { Component } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
 
@Component({
  selector: 'my-app',
  template: `<h1>Weather-App</h1>
              <app-city></app-city>`
})
export class AppComponent { }