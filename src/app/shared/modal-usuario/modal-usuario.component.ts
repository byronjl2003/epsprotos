import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalinteractionService} from 'src/app/services/service.index';

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
  constructor(public _modalservice: ModalinteractionService) {}
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
