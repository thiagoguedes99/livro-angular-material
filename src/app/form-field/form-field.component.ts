import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  nome: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
