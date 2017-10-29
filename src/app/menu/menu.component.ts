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







  // @ViewChild(MatMenuTrigger) trigger: QueryList<MatMenuTrigger>;
  // @ViewChild(MatMenuItem) matItem: MatMenuItem;



  // [overlapTrigger]=false [classList]=classes direction=ltr


  constructor() {
    // this.mat.setElevation(20);

   }

   ngOnInit() {
    this.mat.xPosition = 'before';
    this.mat.yPosition = "below";
    this.mat.overlapTrigger = true;
    //this.mat.close.subscribe(() => {this.fechouMenu()});



    // this.mat.yPosition = "above";
    // this.mat.xPosition = 'before';


    // this.openMenu();

    // this.trigger.openMenu();

    // this.mat.close.subscribe(() => {console.log('fechou')});
    // this.trigger.onMenuClose.subscribe(() => {console.log('evento de onMenuClose')});
    // this.trigger.onMenuOpen.subscribe(() => {console.log('evento de onMenuOpenonMenuClose')});


    // this.mat.setElevation(2);
    // this.mat.items = this.lista
    // this.mat.classList = this.classe;
    // this.mat.direction = "ltr";
    // 'ltr' | 'rtl';

    // this.mat.setElevation(20);
    // this.mat.hover();
    // this.matItem.hover();

    // this.matItem.disabled = true;
    // this.matItem.focus();

  }

  // openMenu(myTrigger: MatMenuTrigger) {
  openMenu() {
    // this.trigger.openMenu();
    // this.trigger.closeMenu();
    // let num = this.trigger.filter(x => x !== myTrigger); //.forEach(x => x.closeMenu());

    // let num = this.triggers.length;
    // console.log(num);
// this.trigger.closeMenu();
    // myTrigger.openMenu();
    // ----------------------------------------------------------
    // myTrigger.toggleMenu();
    // console.log('openMenu');
    // -----------------------------------------

    // this.trigger.openMenu();



    // this.mat.hover();
    // this.matItem.focus();

    // console.log('oi');
    // this.mat.focusFirstItem();
    // this.mat.setElevation(24);
    // this.mat.direction = "ltr";
    // this.matItem.disabled = true;
    // this.mat.focusFirstItem();
    // let meu = this.matItem.getLabel();
    // console.log(meu);


    // this.mat.overlapTrigger = false;
  }

  // closeMenu(myTrigger: MatMenuTrigger) {
  closeMenu() {
    // // myTrigger.closeMenu();
    // console.log('closeMenu');
    // // myTrigger.toggleMenu();
    // console.log(myTrigger.menuOpen);
    // if (myTrigger.menuOpen) {
    //   myTrigger.closeMenu();
    // } else {

    // }

    // this.trigger.closeMenu();
  }

  abriu() {
    console.log('abriu()');
  }

  fechou() {
    console.log('fechou()');
  }

  // fechouMenu() {
  //   console.log('fechouMenu()');
  // }

  abrirViaProgramacao() {
    console.log(this.trigger.menuOpen);
    if (this.trigger.menuOpen) {
      // this.trigger.closeMenu();
      console.log('deu true', this.trigger.menuOpen);
      this.trigger.openMenu(); // fazer o if aqui!!!!!
    } else {
    }
  }

}

/**
 * seguencia de tópicos
 *
 * HTML
 * xPosition=""
 * yPosition=""
 * class="mat-elevation-z2"
 * [overlapTrigger]=false
 * (onMenuOpen)="fechou()"
 * (onMenuClose)="fechou()"
 *
 * TS
 * @ViewChild(MatMenu) mat: MatMenu;
 * this.mat.yPosition = "above";
 * this.mat.yPosition = "below";
 * this.mat.xPosition = 'before';
 * this.mat.xPosition = 'after';
 * this.mat.overlapTrigger = false;
 * this.mat.close.subscribe(() => {console.log('fechou')});
 *
 * @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
 * this.trigger.openMenu();
 * this.trigger.closeMenu();
 * myTrigger.menuOpen: boolean
 *
 *
 */
