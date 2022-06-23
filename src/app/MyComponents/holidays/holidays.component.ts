import { Component } from '@angular/core';
import {GetholidaysService} from "../../MyServices/getholidays.service";
import {HolidaysData} from "../../MyModels/holidays.model";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent {

  today = new Date();
  today_day: string = String(this.today.getDate()).padStart(2,'0');
  today_month: string = String(this.today.getMonth()+1);
  today_year: string = String(this.today.getFullYear());

  constructor(private holidaysService: GetholidaysService) { }

  holidaysData?: HolidaysData;

  ngOnInit() {
    console.log(this.today_year,this.today_month,this.today_day)
    this.getHolidaysData(this.today_year,this.today_month,this.today_day);
  }

    private getHolidaysData(today_year: string,today_month:string,today_day:string) {
      this.holidaysService.getHolidaysData(today_year, today_month, today_day).subscribe({next: (response)=> {
          this.holidaysData = response;
        }
      })
    }




}
