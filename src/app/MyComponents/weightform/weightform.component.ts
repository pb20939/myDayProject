import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Myweight} from "../../MyClasses/myweight";

@Component({
  selector: 'app-weightform',
  templateUrl: './weightform.component.html',
  styleUrls: ['./weightform.component.scss']
})
export class WeightformComponent implements OnInit {
  today = new Date()
  weight=0.00;
  height=176;
  date=String(this.today);
  BMI=0.00;
  opis='';



  @Output() dayWeight = new EventEmitter<Myweight>();

  constructor() { }

  ngOnInit(): void {
  }

  btnAddWeight() {
      var myweight = new Myweight();
      myweight.weight = this.weight;
      myweight.date = this.date;
      myweight.height = this.height;
      this.BMI = this.weight / (this.height / 100 * this.height / 100)
      myweight.BMI = this.BMI;
      if (this.BMI >= 40) {
        myweight.opis = 'otyłość III stopnia';
      } else if (this.BMI >= 35) {
        myweight.opis = 'otyłość II stopnia';
      } else if (this.BMI >=30) {
        myweight.opis = 'otyłość I stopnia';
      } else if (this.BMI >=25) {
        myweight.opis = 'nadwaga';
      } else if (this.BMI >= 18.5) {
        myweight.opis = 'prawidłowa masa ciała';
      } else {
        myweight.opis = 'niedowaga';
      }
      this.dayWeight.emit(myweight);
  }

}
