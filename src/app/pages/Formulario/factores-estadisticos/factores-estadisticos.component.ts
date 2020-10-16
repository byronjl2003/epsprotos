import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-factores-estadisticos',
  templateUrl: './factores-estadisticos.component.html',
  styleUrls: ['./factores-estadisticos.component.css']
})
export class FactoresEstadisticosComponent implements OnInit {
  public titulo: string = 'FACTORES ESTADISTICOS';
  public subtitulo: string =
      'Estos son los factores estadisticos en el sistema';
  constructor() {}

  ngOnInit() {}
}
