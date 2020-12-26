import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {Unidad} from 'src/app/models/unidad.model';
import {DrawerinteractionService} from 'src/app/services/service.index';
import {UnidadesService} from '../../services/administracion/unidades.service';
@Component({
  selector: 'app-list-pag',
  templateUrl: './list-pag.component.html',
  styleUrls: ['./list-pag.component.css']
})
export class ListPagComponent implements OnInit {
  @Input('titulo') titulo: string;
  @Input('drawermodcontent') drawermodcontent: TemplateRef<any>;
  rows: any[] = [new Unidad(100, 'PRUEBAAA', 'PRUEBAA', 2)];
  ColumnMode = ColumnMode;

  constructor(
      private _unidadesService: UnidadesService,
      public _drawerinteractionService: DrawerinteractionService,
  ) {
    const unsub =
        this._unidadesService.getall().subscribe((unidades: Unidad[]) => {
          console.log(unidades);
          this.rows = [...unidades];
          console.log(this.rows);
          unsub.unsubscribe();
        });
  }

  ngOnInit(): void {}
  modificar(val) {
    console.log('modificar', val);
    // BUSCO LA UNIDAD A MODIFICAR
    let unidadmod = this.rows.filter(item => {
      return item.idunidad === val;
    });
    this._unidadesService.changeUnidadState(unidadmod[0]);
    this._drawerinteractionService.changeEstate(true);
  }
}
