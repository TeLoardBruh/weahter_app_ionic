import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';


  let httpOptions = {
  headers: new HttpHeaders(
    // {'Content-Type': 'application/json'}
    {'Access-Control-Allow-Origin': '*'}
    )
};
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
    
  ) { }


  getApi(){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=254554ea13275114569f2372520171bc");
    
  }

  callingApi(q){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+q+"&units=metric&APPID=254554ea13275114569f2372520171bc");
    // console.log(q);
  }
}
