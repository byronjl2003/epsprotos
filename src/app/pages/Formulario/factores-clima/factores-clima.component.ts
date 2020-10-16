import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-factores-clima',
  templateUrl: './factores-clima.component.html',
  styleUrls: ['./factores-clima.component.css']
})
export class FactoresClimaComponent implements OnInit {
  public titulo: string = 'ESCALAS';
  public subtitulo: string = 'Estos son las escalas en el sistema ';
  constructor() {}

  ngOnInit() {}
}
