import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  today: any;
  today_day='';
  today_month='';
  today_year='';
  today_weekday='';

  constructor() { }

  ngOnInit(): void {
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
      'niedziela',
    ]

    this.today = new Date();
    this.today_day = String(this.today.getDate()).padStart(2,'0');
    this.today_month = months[this.today.getMonth()];
    this.today_year = this.today.getFullYear();

    if (this.today.getDay() === 0) {
      this.today_weekday = weekdays[6]
    } else {
    this.today_weekday = weekdays[this.today.getDay()-1]
    }

    this.today = this.today_day + ' ' + this.today_month + ' ' + this.today_year
  }

}
