import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatMenu) mat: MatMenu;

  constructor() {

  }

   ngOnInit() {
    this.mat.xPosition = 'before';
    this.mat.yPosition = "below";
    this.mat.overlapTrigger = true;
  }

  abriu() {
    console.log('abriu()');
  }

  fechou() {
    console.log('fechou()');
  }

  abrirViaProgramacao() {
    console.log(this.trigger.menuOpen);
    this.trigger.openMenu();
  }

}
