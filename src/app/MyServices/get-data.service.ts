import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {}

  getData(myData:Function) {
    this.http.get('http://localhost:4200/assets/data/users.json').subscribe(()=>{myData();})
  }
}
