import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuItem, MatMenu, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // lista: MatMenuItem ['eu', 'tu', ];
  // lista: MatMenuItem [] = ['eu', 'tu', 'ele' ];

  classes: {
    'vermelho': 'true';
  }

  classe: 'vermelho';

  // @ViewChild(MatMenu) mat: MatMenu;
  // @ViewChild(MatMenu) mat: MatMenu;



  // [overlapTrigger]=false [classList]=classes direction=ltr

   @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  //   someMethod() {
  //     this.trigger.openMenu();
  //   }

  constructor() { }

  ngOnInit() {
    // this.someMethod()
    // this.mat.overlapTrigger = false;
    // this.openMenu();
    // this.mat.yPosition = "above";
    // this.mat.overlapTrigger = false;

    // this.mat.items = this.lista
    // this.mat.classList = this.classe;
    // this.mat.direction = "ltr";

  }

  openMenu() {
    // console.log('oi');
    this.trigger.openMenu();
    // this.mat.focusFirstItem();
    // this.mat.setElevation(10);
    // this.mat.direction = "ltr";
    // this.mat.hover();

    // this.mat.overlapTrigger = false;
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

}
