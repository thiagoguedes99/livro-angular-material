import { Component, OnInit, ViewChild } from '@angular/core';
import {MatRipple} from '@angular/material';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(MatRipple) ripple: MatRipple;

    // centered = false;
    // disabled = false;
    // unbounded = false;
    // rounded = false;
    // radius: number;
    // rippleSpeed = 1;
    // rippleColor = '';

    // disableButtonRipples = false;

    // launchRipple(persistent = false) {
    //   if (this.ripple) {
    //     this.ripple.launch(0, 0, { centered: true, persistent });
    //   }
    // }

    // fadeOutAll() {
    //   if (this.ripple) {
    //     this.ripple.fadeOutAll();
    //   }
    // }

  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }

}
