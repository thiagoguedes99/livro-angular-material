import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') side:MatSidenav;

   ngOnInit() {
    // this.side.mode = 'over';
    // this.side.mode = 'push';
    // this.side.mode = 'side';
    
    // this.side.position = 'start';
    // this.side.position = 'end';
    
    // this.side.opened = false;
    // this.side.opened = true;

    // this.side.disableClose = false;
    // this.side.disableClose = true;
    
    // this.side.fixedInViewport = true;
    // this.side.fixedTopGap = 100;
    // this.side.fixedBottomGap = 100;
  }

  abrir() {
    this.side.open();
  }

  fechar() {
    this.side.close();
  }

}
