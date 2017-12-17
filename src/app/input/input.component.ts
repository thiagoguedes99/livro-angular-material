import { Component, OnInit } from '@angular/core';
import { FloatPlaceholderType } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  // email = new FormControl('thiago');
  valor: FloatPlaceholderType = 'always';
  mostar: boolean = false;
  meuValor: string;

  constructor() { }

  ngOnInit() {
  }

}
