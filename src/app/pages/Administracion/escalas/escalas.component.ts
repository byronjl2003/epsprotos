import {Component, OnInit} from '@angular/core';
import {ModalinteractionService} from 'src/app/services/service.index';

@Component({
  selector: 'app-escalas',
  templateUrl: './escalas.component.html',
  styleUrls: ['./escalas.component.css']
})
export class EscalasComponent implements OnInit {
  constructor(public _modalservice: ModalinteractionService) {
    console.log('CONTRUCTOR ESCALAS');
  }
  public titulo: string = 'ESCALAS';
  public subtitulo: string = 'Estos son las escalas de del propecto ';
  ngOnInit() {}

  showDialog() {
    // this.ocultar = false;
    // console.log(this.ocultar);
    this._modalservice.changeEstate(false);
  }
  /* showDialog() {
    let view = this.modal_1.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList
        .remove('fade');
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add(
        'modal-open');
    this.modal_1.elementRef.nativeElement.previousElementSibling.style.display =
        'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
  } */

  /* closeDialog() {
    this.vc.clear();
    document.body.removeChild(this.backdrop);
  } */
}
