import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeblinksData} from "../MyModels/weblinks.model";

@Injectable({
  providedIn: 'root'
})
export class GetweblinksService {

  constructor(private http: HttpClient) { }

  getWeblinks(): Observable<WeblinksData> {
    return this.http.get<WeblinksData>('http://localhost:4200/assets/data/links.json')
  }
}
