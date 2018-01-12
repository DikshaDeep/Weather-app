import { Component, OnInit } from '@angular/core';
import {Service} from './cityservice';
import { Observable } from 'rxjs/Observable';
import {Data,Json,Main, Coord} from './city';



@Component({
  selector: 'app-city',
  templateUrl: 'app/city/city.component.html',
  styleUrls: ['app/city/city.component.css'],
  providers:[Service]
})
export class CityComponent implements OnInit {
  
  constructor(private svc:Service) { }
  a:Json;
  b:Main;
  lati:any;
  longi:any;
  stat=false;
  
  location ={};
   setPosition(position){
      this.location = position.coords;
      }
  ngOnInit(){
    
   if(navigator.geolocation){
    this.stat=true;
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.lati=position.coords.latitude;
        this.longi=position.coords.longitude;
        this.svc.getlocation(this.lati,this.longi).subscribe(t=>{this.a=t;console.log(this.a)});
       });
   }
 }
  submit(pin, country){
      this.svc.postdetails(pin,country).subscribe(t=>{this.a=t;this.b=(this.a.main)});
      this.stat=true;
     }
    
}
