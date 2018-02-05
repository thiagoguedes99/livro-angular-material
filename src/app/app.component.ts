import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  minhaData = new Date(2018,0,20);
  myStart: Date = new Date(2018,1,22);
  date = new FormControl(new Date(2018,1,22));

  dataInicio: Date = new Date(2020,7,20);
  dataMinima: Date = new Date(2020,7,10);
  dataMaxima: Date = new Date(2020,7,25);

  filtraDatas = (date: Date) => {
    return (date.getMonth() == 7 && date.getDate() != 18) && (date.getDay() != 0 && date.getDay() != 6);
  }

  // mudaValor(evento) {
  //   console.log(this.dataInicio.toString());
  //   console.log('Chamado a função => mudaValor', evento.getFullYear());
  // }

  // mudaConteudo(evento) {
  //   console.log('Chamado a função => mudaConteudo', evento.toLocaleDateString());
  // }

  mudaValor(evento) {
    console.log('Chamado a função => mudaValor', evento.getFullYear());
  }

  mudaConteudo(evento) {
    console.log('Chamado a função => mudaConteudo', evento.getFullYear());
  }
}
