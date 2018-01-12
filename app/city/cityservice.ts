import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//for mapping
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';// for exception
import { Data, Json, Coord } from './city';

@Injectable()
export class Service{
    constructor(private http: Http){}
    
    postdetails(pin,country):Observable<any>{
        return this.http.get(
            'https://api.openweathermap.org/data/2.5/' +
            'weather?zip='+ pin +','+ country +
            '&appid='+ '59285528ee3790eaaa8c4049c0870b3a' +
            '&units=' + 'metric').map(response => response.json())
    }  
    getlocation(lat,lon ):Observable<any>  {
        return this.http.get(
            'http://api.openweathermap.org/data/2.5/'+'weather?'+'lat='+lat+'&lon='+lon+
            '&appid='+ '59285528ee3790eaaa8c4049c0870b3a' +
            '&units=' + 'metric').map(response => response.json() );
    }
}