import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  isDisabled: boolean = false;
  clickCounter: number = 0;
  toggleDisable: boolean = false;

  @ViewChild('botao') meuBotao: MatButton;

  constructor() {}

  ngOnInit() {
    this.meuBotao.focus();
  }

}
