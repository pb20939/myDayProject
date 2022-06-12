import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherData} from "../MyModels/weather.model";

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor(private http: HttpClient) {}

    getWeatherData(): Observable<WeatherData>{
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q=Bydgoszcz&appid=4f1fc3441b07c9ae898fbc6eb4d08cdc&units=metric&lang=pl')
  }
}
