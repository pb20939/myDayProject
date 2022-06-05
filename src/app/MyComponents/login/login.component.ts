import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GetDataService} from "../../MyServices/get-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  today: any;
  today_day='';
  today_month='';
  today_year='';
  today_weekday='';
  users: any;
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
  counter=10;






  constructor(private http: HttpClient,private router:Router, private  getMyData:GetDataService) { }

  ngOnInit(): void {
    this.getMyData.getData(this.myData.bind(this))
    this.getUsers();
    this.getWeather();
    this.getToday();
  }

  getToday() {
    const months = [
      'styczeń',
      'luty',
      'marzec',
      'kwiecien',
      'maj',
      'czerwiec',
      'lipiec',
      'sierpień',
      'wrzesień',
      'październik',
      'listopad',
      'grudzień',
    ]
    const weekdays = [
      'poniedziałek',
      'wtorek',
      'środa',
      'czwartek',
      'piątek',
      'sobota',
      'niedziela'
    ]
    this.today = new Date();
    this.today_day = String(this.today.getDate()).padStart(2,'0');
    this.today_month = months[this.today.getMonth()];
    this.today_year = this.today.getFullYear();
    this.today_weekday = weekdays[this.today.getDay()-1]

    this.today = this.today_day + ' ' + this.today_month + ' ' + this.today_year
  }
  myData() {
    this.counter++;
  }

login () {
    this.router.navigate(['home'])
}

getUsers() {
    this.http.get('http://localhost:4200/assets/data/users.json').subscribe((users)=>{this.users = users}
);

}


getWeather() {
  this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Bydgoszcz&appid=4f1fc3441b07c9ae898fbc6eb4d08cdc&units=metric&lang=pl').subscribe((pogoda)=>
  {this.pogoda = pogoda;
    console.log(this.pogoda.weather[0]["description"])

    this.pogoda_main = this.pogoda.weather[0]["main"];
    this.pogoda_description=this.pogoda.weather[0]["description"];
    this.pogoda_icon = `https://openweathermap.org/img/wn/${this.pogoda.weather[0]["icon"]}@2x.png`;
    this.pogoda_temp=this.pogoda.main.temp;
    this.pogoda_pressure=this.pogoda.main.pressure;
    this.pogoda_humidity=this.pogoda.main.humidity;
    this.pogoda_feels_like=this.pogoda.main.feels_like;
    this.pogoda_name=this.pogoda.name.toUpperCase();
    this.pogoda_country=this.pogoda.sys.country;
  });

}

}
