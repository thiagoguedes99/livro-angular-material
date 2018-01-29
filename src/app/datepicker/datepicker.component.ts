import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    // dateInput: 'LL',
    dateInput: 'YYYY',
  },
  display: {
    // dateInput: 'LL',
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

// export const MY_FORMATS = 'DD-MM-YYYY';

// export const MY_FORMATS = {
//   dateA11yLabel: 'DD-MM-YYYY'
// };

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
    // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
    // {provide: MAT_DATE_FORMATS, useValue: 'DD-MM-YYYY'}
  ]
})
export class DatepickerComponent implements OnInit {

  constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
    // this.fazData.createDate(2018,0,25);
    dateAdapter.setLocale('pt-BR');
    // dateAdapter.format(this.fazData, 'dd-mm-yyyy');
    // dateAdapter.
  }

  ngOnInit() {
  }

  fazData: NativeDateAdapter = new NativeDateAdapter('pt-BR');

  // minhaData = new Date(2018,0,20);
  // myStart: Date = new Date(2018,1,22);
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

  // onDateInput = (e: MatDatepickerInputEvent<Date>) => this.lastDateInput = e.value;
  // onDateChange = (e: MatDatepickerInputEvent<Date>) => this.lastDateChange = e.value;

  onDateInput(event) {
    console.log(event);
  }

  onDateChange(event) {
    console.log(event);
  }
  dateCtrl = new FormControl();

}
