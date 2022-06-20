import { Component, OnInit } from '@angular/core';
import {GetweblinksService} from "../../MyServices/getweblinks.service";
import {WeblinksData} from "../../MyModels/weblinks.model";
import {PlanetData} from "../../MyModels/planets.model";
import {GetplanetsService} from "../../MyServices/getplanets.service";

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.scss']
})
export class WeblinksComponent implements OnInit {

  weblinksData?:WeblinksData
  planetData?:PlanetData

  constructor(private weblinkService: GetweblinksService, private planetService: GetplanetsService) { }

  ngOnInit(): void {
    this.getWeblinks();
    this.getPlanets();
  }

  private getWeblinks() {
    this.weblinkService.getWeblinks().subscribe({next:(response)=>{
      this.weblinksData=response;
      }})
  }

  private  getPlanets() {
    this.planetService.getplanet().subscribe({next: (response)=>{
      this.planetData=response;
        console.log(this.planetData)
      }})
  }

}
