import { Component, OnInit } from '@angular/core';
import {GetweblinksService} from "../../MyServices/getweblinks.service";
import {WeblinksData} from "../../MyModels/weblinks.model";

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.scss']
})
export class WeblinksComponent implements OnInit {

  weblinksData?:WeblinksData

  constructor(private weblinkService: GetweblinksService) { }

  ngOnInit(): void {
    this.getWeblinks();
  }

  private getWeblinks() {
    this.weblinkService.getWeblinks().subscribe({next:(response)=>{
      this.weblinksData=response;
        console.log(this.weblinksData)
      }})
  }

}
