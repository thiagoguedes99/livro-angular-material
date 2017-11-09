import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // isLaunched = false;
  // fillerContent = Array(30);
  // fixed = false;
  // coverHeader = false;
  // showHeader = false;
  // showFooter = false;
  // modeIndex = 0;
  // get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  // get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  // get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }


  // @ViewChild('sidenav') side:MatDrawer;
  @ViewChild('sidenav') side:MatSidenav;
  // modo: string = 'push';
  // modo: string = 'side';

   ngOnInit() {
    this.side.fixedInViewport = true;
    this.side.fixedTopGap = 100;
    this.side.fixedBottomGap = 100;
  }

  abrir() {
    this.side.open();
  }

  fechar() {
    this.side.close();
  }

  //   this.sides.onPositionChanged.subscribe(() => { this.mudouPosicao() });
  //   // this.side.ope.subscribe(() => { this.mudouPosicao() });
  //   this.sides.onPositionChanged.subscribe(() => { this.mudouPosicao() });
  //   console.log(this.sides.disableClose);
  //   console.log(this.sides.opened);
  // this.sides.fixedInViewport = true;
  // this.sides.fixedTopGap = 100;
  // this.sides.fixedBottomGap = 100;

  mudouPosicao() {
    console.log('mudouPosicao()');
  }

  abreTudo() {
    // this.sides.open();
    // this.sides.disableClose = true;
    // console.log(this.sides.disableClose);
    // console.log(this.sides.opened);

  }

  clique() {
    console.log('clicou');
  }
}


// mat-sidenav:
// mode
//   "over" - faz o padrão;
//   "push" - empura e coloca a sombra;
//   "side" - empurra sem a sombra, (não volta sozinho)

// align @deprecated
//   "start" - coloca o side na esquerda (padrão)
//   "end" - coloca o side na direita

// position
//   "start" - coloca o side na esquerda (padrão)
//   "end" - coloca o side na direita

// opened
//   "true" - começa com o side aberto
//   "false" - começa com o side fechado

// disableClose
//   "true" - trava o fechamento automático
//   "false" - deixa fechar cliando fora

// close() - evento de abrir
// open() - evento de fechar

// this.sides.fixedInViewport = true;
// this.sides.fixedTopGap = 100;
// this.sides.fixedBottomGap = 100;

