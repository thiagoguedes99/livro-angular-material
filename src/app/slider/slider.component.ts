import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material';

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

  mudou(event: MatSliderChange) {
    console.log(event.source.percent)
    console.log(event.value)
    // event.source.
  }

}
