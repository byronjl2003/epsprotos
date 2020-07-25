import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef,} from '@angular/core';
import {ModalinteractionService} from 'src/app/services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  /*
  public ocultar: boolean = true;
  @ViewChild('modal_1', {static: false}) modal_1: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef, static: false})
  vc: ViewContainerRef;
  backdrop: any;
  */
  constructor(public _modalservice: ModalinteractionService) {}

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
