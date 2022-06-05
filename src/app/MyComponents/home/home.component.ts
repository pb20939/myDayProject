import {Component, OnInit, ViewChild} from '@angular/core';
import {Myweight} from "../../MyClasses/myweight";
import {WeightchartComponent} from "../weightchart/weightchart.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(WeightchartComponent) child: any;


  constructor() { }

  ngOnInit(): void {
  }

  getData(weight:Myweight) {
    this.child.addData(weight)
  }

}
