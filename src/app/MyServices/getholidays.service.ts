import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {HolidaysData} from "../MyModels/holidays.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GetholidaysService {

  constructor(private http: HttpClient) {
  }

  getHolidaysData(today_year: string,today_month:string,today_day:string): Observable<HolidaysData> {
    // return this.http.get<HolidaysData>("https://holidays.abstractapi.com/v1/?api_key=4647f311dbce4198ac5602a06fbc5931&country=US")
    return this.http.get<HolidaysData>(environment.holidaysApiBaseUrl,{
      params: new HttpParams()
        .set('api_key','4647f311dbce4198ac5602a06fbc5931')
        .set('country','US')
        .set('year',today_year)
        .set('month',today_month)
        .set('day',today_day)
    })
  }
}
