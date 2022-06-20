import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyData} from "../MyModels/currency.model";


@Injectable({
  providedIn: 'root'
})
export class GetcurrencyService {
  url = '';

  constructor(private http: HttpClient) {}

  getCurrencys(currencyDate: string) :Observable<CurrencyData> {
    this.url = `http://api.nbp.pl/api/exchangerates/tables/c/${currencyDate}/`;
    console.log(this.url)
    return this.http.get<CurrencyData>(this.url)
  }
}
