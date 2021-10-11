import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  selected = 'Meters';
  ngOnInit(): void {
  }
  length=[
    {
      value:"Meters"
    },
    {
      value:"Kilometers"
    },
    {
      value:"Centimeters"
    },
    {
      value:"Millimeter"
    },
    {
      value:"Micrometer"
    },
    {
      value:"Foot"
    }
  ]
}
