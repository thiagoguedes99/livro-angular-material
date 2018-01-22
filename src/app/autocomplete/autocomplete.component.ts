import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

export interface State {
  code: string;
  name: string;
}

export interface StateGroup {
  letter: string;
  states: State[];
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  stateCtrl: FormControl;
  currentState = '';
  currentGroupedState = '';
  topHeightCtrl = new FormControl(0);

  reactiveStates: any;
  tdStates: any[];

  tdDisabled = false;

  @ViewChild(NgModel) modelDir: NgModel;

  groupedStates: StateGroup[];
  filteredGroupedStates: StateGroup[];
  states: State[] = [
    {code: 'AL', name: 'Alabama'},
    {code: 'AK', name: 'Alaska'},
    {code: 'AZ', name: 'Arizona'},
    {code: 'AR', name: 'Arkansas'},
    {code: 'CA', name: 'California'},
    {code: 'CO', name: 'Colorado'},
    {code: 'CT', name: 'Connecticut'},
    {code: 'DE', name: 'Delaware'},
    {code: 'FL', name: 'Florida'},
    {code: 'GA', name: 'Georgia'},
    {code: 'HI', name: 'Hawaii'},
    {code: 'ID', name: 'Idaho'},
    {code: 'IL', name: 'Illinois'},
    {code: 'IN', name: 'Indiana'},
    {code: 'IA', name: 'Iowa'},
    {code: 'KS', name: 'Kansas'},
    {code: 'KY', name: 'Kentucky'},
    {code: 'LA', name: 'Louisiana'},
    {code: 'ME', name: 'Maine'},
    {code: 'MD', name: 'Maryland'},
    {code: 'MA', name: 'Massachusetts'},
    {code: 'MI', name: 'Michigan'},
    {code: 'MN', name: 'Minnesota'},
    {code: 'MS', name: 'Mississippi'},
    {code: 'MO', name: 'Missouri'},
    {code: 'MT', name: 'Montana'},
    {code: 'NE', name: 'Nebraska'},
    {code: 'NV', name: 'Nevada'},
    {code: 'NH', name: 'New Hampshire'},
    {code: 'NJ', name: 'New Jersey'},
    {code: 'NM', name: 'New Mexico'},
    {code: 'NY', name: 'New York'},
    {code: 'NC', name: 'North Carolina'},
    {code: 'ND', name: 'North Dakota'},
    {code: 'OH', name: 'Ohio'},
    {code: 'OK', name: 'Oklahoma'},
    {code: 'OR', name: 'Oregon'},
    {code: 'PA', name: 'Pennsylvania'},
    {code: 'RI', name: 'Rhode Island'},
    {code: 'SC', name: 'South Carolina'},
    {code: 'SD', name: 'South Dakota'},
    {code: 'TN', name: 'Tennessee'},
    {code: 'TX', name: 'Texas'},
    {code: 'UT', name: 'Utah'},
    {code: 'VT', name: 'Vermont'},
    {code: 'VA', name: 'Virginia'},
    {code: 'WA', name: 'Washington'},
    {code: 'WV', name: 'West Virginia'},
    {code: 'WI', name: 'Wisconsin'},
    {code: 'WY', name: 'Wyoming'},
  ];


  constructor() {
    this.tdStates = this.states;
    this.stateCtrl = new FormControl({code: 'CA', name: 'California'});
    this.reactiveStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(this.stateCtrl.value),
        map(val => this.displayFn(val)),
        map(name => this.filterStates(name))
      );

    this.filteredGroupedStates = this.groupedStates = this.states.reduce((groups, state) => {
      let group = groups.find(g => g.letter === state.name[0]);

      if (!group) {
        group = { letter: state.name[0], states: [] };
        groups.push(group);
      }

      group.states.push({ code: state.code, name: state.name });

      return groups;
    }, [] as StateGroup[]);

  }

  // ngOnInit() {
  // }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }

  filterStates(val: string) {
    return val ? this._filter(this.states, val) : this.states;
  }

  filterStateGroups(val: string) {
    if (val) {
      return this.groupedStates
        .map(group => ({ letter: group.letter, states: this._filter(group.states, val) }))
        .filter(group => group.states.length > 0);
    }

    return this.groupedStates;
  }

  private _filter(states: State[], val: string) {
    const filterValue = val.toLowerCase();
    return states.filter(state => state.name.toLowerCase().startsWith(filterValue));
  }


  // paises: string[] = ['Brasil', 'Argentina', 'Peru', 'Chile', 'Paraguai', 'Uruguai'];
  paises: any[] = [
    {
      nome: 'Brasil',
      sigla: 'BR'
    },
    {
      nome:'Argentina',
      sigla: 'AR'
    },
    {
      nome:'Peru',
      sigla: 'PE'
    },
    {
      nome: 'Chile',
      sigla: 'CL'
    },
    {
      nome:'Paraguai',
      sigla: 'PY'
    },
    {
      nome: 'Uruguai',
      sigla: 'UY'
    }
  ];
  paisesFiltrados: string[];
  // conteudoDigitado: string;
  conteudoDigitado: FormControl = new FormControl();

  ngOnInit() {
    this.conteudoDigitado.valueChanges.subscribe(val => {
      this.paisesFiltrados = this.paises.filter(nome => nome.nome.toLowerCase().includes(val));
    })
  }

  // filtrar(valor) {
  //   console.log(valor)
  //   // this.paisesFiltrados = this.paises.filter(nome => nome.toLowerCase().startsWith(valor));
  //   this.paisesFiltrados = this.paises.filter(nome => nome.toLowerCase().includes(valor));
  // }

  exibe(obj): string | null {
    return obj ? obj.nome : null;
  }

  selecionou(event) {
    console.log(event);
  }

}
