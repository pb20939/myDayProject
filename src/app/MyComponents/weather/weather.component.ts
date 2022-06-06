import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  pogoda:any;
  pogoda_name = '';
  pogoda_country = '';
  pogoda_main = '';
  pogoda_description='';
  pogoda_icon='';
  pogoda_temp='';
  pogoda_feels_like = '';
  pogoda_pressure='';
  pogoda_humidity = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Bydgoszcz&appid=4f1fc3441b07c9ae898fbc6eb4d08cdc&units=metric&lang=pl').subscribe((pogoda) => {
      this.pogoda = pogoda;
      console.log(this.pogoda.weather[0]["description"])

      this.pogoda_main = this.pogoda.weather[0]["main"];
      this.pogoda_description = this.pogoda.weather[0]["description"];
      this.pogoda_icon = `https://openweathermap.org/img/wn/${this.pogoda.weather[0]["icon"]}@2x.png`;
      this.pogoda_temp = this.pogoda.main.temp;
      this.pogoda_pressure = this.pogoda.main.pressure;
      this.pogoda_humidity = this.pogoda.main.humidity;
      this.pogoda_feels_like = this.pogoda.main.feels_like;
      this.pogoda_name = this.pogoda.name;
      this.pogoda_country = this.pogoda.sys.country;
    });
  }

}
