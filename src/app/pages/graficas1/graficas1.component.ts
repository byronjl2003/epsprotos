import {Component, OnInit} from '@angular/core';
import {GraficoDonaComponent} from '../../components/grafico-dona/grafico-dona.component';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  graficos: any = {
    'grafico1': {
      'labels': ['trabajo en equipo', 'Cooperacion', 'alegria'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'Unidad 1'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Unidad 2'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': 'unidad 3?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': 'unidad 4'
    },
  };
  constructor() {
    /* console.log(this.graficos.grafico1);
    console.log(this.graficos.grafico1.data); */
  }

  ngOnInit() {}
}
