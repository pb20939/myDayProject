import { Component, OnInit } from '@angular/core';
import {GetweatherService} from "../../MyServices/getweather.service";
import {WeatherData} from "../../MyModels/weather.model"

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: GetweatherService) { }

  weatherData?: WeatherData;
  pogoda_icon='';

  ngOnInit(): void {
    this.getWeatherData();
  }

  private  getWeatherData() {
    this.weatherService.getWeatherData().subscribe({next: (response)=> {
        this.weatherData = response;
        this.pogoda_icon = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
        console.log('wynik: ',response);
      }
      })

  }

}
