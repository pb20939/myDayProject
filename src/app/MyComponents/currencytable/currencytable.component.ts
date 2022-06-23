import { Component, OnInit } from '@angular/core';
import {GetcurrencyService} from "../../MyServices/getcurrency.service";
import {CurrencyData} from "../../MyModels/currency.model";

@Component({
  selector: 'app-currencytable',
  templateUrl: './currencytable.component.html',
  styleUrls: ['./currencytable.component.scss']
})
export class CurrencytableComponent implements OnInit {

  currencyDate: any;
  imgURL: string = 'http://localhost:4200/assets/images/flags/pln.svg'

  constructor(private currencyService: GetcurrencyService) {
  }
  currencyData?: CurrencyData;

  ngOnInit(): void {
    this.currencyDate = new Date(Date.now()).toISOString().split('T')[0];
    this.getCurrency(this.currencyDate);
  }


  private getCurrency(date:string) {
    this.currencyService.getCurrencys(date).subscribe({next: (response)=>{
        this.currencyData=response;
      }

    })
  }

  btnChangeDate() {
    this.getCurrency(this.currencyDate);
  }

}
