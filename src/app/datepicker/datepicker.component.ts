import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  touch: boolean;
  filterOdd: boolean;
  yearView: boolean;
  inputDisabled: boolean;
  datepickerDisabled: boolean;
  minDate: Date;
  maxDate: Date;
  startAt: Date;
  date: Date;
  lastDateInput: Date | null;
  lastDateChange: Date | null;

  // 'true' vai mostrar
  dateFilter = (date: Date) => {
    console.log(date);
    console.log(date.getMonth());
    console.log(date.getMonth() % 2);
    console.log(date.getMonth() % 2 == 1);
    console.log('date.getMonth() % 2 == 1 && date.getDate() % 2 == 0');
    console.log(date.getMonth() % 2 == 1 && date.getDate() % 2 == 0);
    console.log(date.getDate());
    console.log(date.getDate() % 2);
    console.log(date.getDate() % 2 == 0);
    console.log('date.getDate()');
    console.log(date.getDate());
    // return date.getMonth() % 2 == 1 && date.getDate() % 2 == 0;
    return (date.getMonth() == 0 && date.getDate() != 15) && (date.getDay() != 0 && date.getDay() != 6);
  }

  // matDatepicker = funções diretas no datepicker
  // matDatepickerInput = funções de interação do input com o datepicker
  onDateInput = (e: MatDatepickerInputEvent<Date>) => this.lastDateInput = e.value;
  onDateChange = (e: MatDatepickerInputEvent<Date>) => this.lastDateChange = e.value;

  dateCtrl = new FormControl();

}
