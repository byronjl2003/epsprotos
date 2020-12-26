import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {ModalinteractionService} from 'src/app/services/service.index';
import {UnidadesService} from '../../../services/administracion/unidades.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  @ViewChild('contentTemplate') drawermodcontent: TemplateRef<any>;
  public titulo: string = 'UNIDADES';
  public subtitulo: string = 'Estos son las unidades del sistema';
  constructor(
      public _modalservice: ModalinteractionService,
      private _servicio: UnidadesService) {}

  ngOnInit() {}

  showDialog() {
    this._modalservice.changeEstate(false);
  }
}