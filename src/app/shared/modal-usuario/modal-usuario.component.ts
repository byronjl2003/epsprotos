import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalinteractionService} from 'src/app/services/service.index';
// declare function init_plugin_selects();
@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {
  /*
  @Input('ocultar') public hiden: boolean = true;
  @Output() public childevent = new EventEmitter();
  */
  constructor(public _modalservice: ModalinteractionService) {
    console.log('Constructor modalusuario');
    // init_plugin_selects();
  }
  public hiden: boolean = true;
  ngOnInit(): void {
    this._modalservice.modalState$.subscribe(newstate => {
      this.hiden = newstate;
    });
  }
  closeDialog() {
    console.log('in closeDialog');
    this._modalservice.changeEstate(true);
  }
}
