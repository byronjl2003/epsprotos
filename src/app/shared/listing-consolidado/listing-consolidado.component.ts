import {Component, OnInit} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-listing-consolidado',
  templateUrl: './listing-consolidado.component.html',
  styleUrls: ['./listing-consolidado.component.css']
})
export class ListingConsolidadoComponent implements OnInit {
  public titulo: string = 'USUARIOS';
  public subtitulo: string =
      'Estos son los usuarios que se encuentran actualmente en el sistema';

  rows = [];
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      const rows = JSON.parse(req.response);
      cb(rows.splice(0, 50));
    };

    req.send();
  }

  getRowClass(row) {
    return {'age-is-ten': row.age % 10 === 0};
  }

  getCellClass({row, column, value}): any {
    return {'is-female': value === 'female'};
  }
  ngOnInit() {}
}
