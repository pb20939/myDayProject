import { Component, OnInit } from '@angular/core';
import {Myweight} from "../../MyClasses/myweight";

@Component({
  selector: 'app-weightchart',
  templateUrl: './weightchart.component.html',
  styleUrls: ['./weightchart.component.scss']
})
export class WeightchartComponent implements OnInit {
  collectionWeight = new Array<Myweight>();
  cos=50;
  constructor() { }

  ngOnInit(): void {
  }

  addData(weight: Myweight) {
    this.collectionWeight.push(weight);
  }
}
