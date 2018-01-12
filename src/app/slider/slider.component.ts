import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  demo: number;
  val: number = 50;
  min: number = 0;
  max: number = 100;
  disabledValue = 0;

}
