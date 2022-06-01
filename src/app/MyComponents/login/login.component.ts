import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
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

login () {
    this.router.navigate(['home'])
}

getUsers() {
    this.http.get('http://localhost:4200/assets/data/users.json').subscribe((users)=>{this.users = users});
}

}
