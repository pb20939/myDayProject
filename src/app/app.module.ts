import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { HomeComponent } from './MyComponents/home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WeightformComponent } from './MyComponents/weightform/weightform.component';
import { WeightchartComponent } from './MyComponents/weightchart/weightchart.component';
import { MainComponent } from './MyComponents/main/main.component';
import { WeatherComponent } from './MyComponents/weather/weather.component';
import { HolidaysComponent } from './MyComponents/holidays/holidays.component';
import { WeblinksComponent } from './MyComponents/weblinks/weblinks.component';
import { CurrencyformComponent } from './MyComponents/currencyform/currencyform.component';
import { CurrencytableComponent } from './MyComponents/currencytable/currencytable.component';
import { CurrencyComponent } from './MyComponents/currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WeightformComponent,
    WeightchartComponent,
    MainComponent,
    WeatherComponent,
    HolidaysComponent,
    WeblinksComponent,
    CurrencyformComponent,
    CurrencytableComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
