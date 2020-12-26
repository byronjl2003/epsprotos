import {Component, Input, OnInit} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-listing-encuesta',
  templateUrl: './listing-encuesta.component.html',
  styleUrls: ['./listing-encuesta.component.css']
})
export class ListingEncuestaComponent implements OnInit {
  @Input('titulo') public titulo: string = 'ENCUESTAS';
  @Input('subtitulo')
  public subtitulo: string = 'Estos son las encuestas en el sistema';

  rows = [];
  joke = 'knock knock';

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data.splice(0, 10);
      console.log(this.rows)
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/encuestas.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {}
}
