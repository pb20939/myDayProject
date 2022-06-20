import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanetData} from "../MyModels/planets.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetplanetsService {

  constructor(private  http: HttpClient) { }

  getplanet (): Observable<PlanetData> {
    return this.http.get<PlanetData>('http://localhost:4200/assets/data/planets.json')
    // return this.http.get<PlanetData>(environment.planetsApiBaseUrl,{
    //   headers: new HttpHeaders()
    //     .set(environment.ContentTypeName,environment.ContentTypeValue)
    //     .set(environment.apikeyName,environment.apikeyValue),
    //   params: new HttpParams()
    //     .set("collection", "planets")
    //     .set("database", "sample_guides")
    //     .set("dataSource", "myday")
    // })

  }
}

