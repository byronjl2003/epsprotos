import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  public titulo: string = 'FORMULARIOS';
  public subtitulo: string = 'Estos son los formularios en el sistema';
  constructor() {}

  ngOnInit() {}
}
