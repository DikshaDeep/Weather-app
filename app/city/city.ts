export class Data{
    
    zip:number;
}

export class Json{
    clouds:Clouds;
    coord:Coord;
    dt:number;
    id:number;
    main:Main;
    name:String;
    sys:Sys;
    visibility:number;
    weather:Weather[];
    wind:Wind;
    

}

class Clouds{
    all:number;
}
export class Coord{
    lat:number;
    lon:number;
}
export class Main{
    humidity:number;
    pressure:number;
    temp:number;
    temp_max:number;
    temp_min:number;
}
class Sys{
    country:String;
    id:number;
    message:any;
    sunrise:any;
    sunset:any;
    type:number;
}
class Weather{
    id:number;
    main:String;
    description:String;
}
class Wind{
    deg:number;
    speed:number;
}