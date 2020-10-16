import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Subscription} from 'rxjs';

import {Unidad} from 'src/app/models/unidad.model';

import {UnidadesService} from 'src/app/services/administracion/unidades.service';
import {UsuariosService} from 'src/app/services/administracion/usuarios.service';
import {DrawerinteractionService, UsuarioService} from 'src/app/services/service.index';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit, OnDestroy {
  @Input('drawermodcontent') drawermodcontent: TemplateRef<any>;
  public visible: boolean = false;
  public subscription: Subscription;
  public othersub: Subscription;
  public unidad: Unidad = null;
  isLoadingOne = false;
  // public hiden: boolean = true;
  constructor(
      private _draweinteractionService: DrawerinteractionService,
      private _unidadService: UnidadesService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription =
        this._draweinteractionService.modalState$.subscribe(state => {
          this.visible = state;
        });
    this.othersub = this._unidadService.unidadState$.subscribe(unidad => {
      this.unidad = unidad;
    });



    console.log('gnOnInit del DRAWE');
  }
  open(): void {
    this._draweinteractionService.changeEstate(true);
  }

  close(): void {
    this._draweinteractionService.changeEstate(false);
  }

  modifyvisible: boolean = false;

  modifyclickMe(): void {
    this.visible = false;
  }

  modifychange(value: boolean): void {
    console.log(value);
  }
}
