import {Component, OnInit} from '@angular/core';
import {ModalinteractionService} from 'src/app/services/service.index';
declare function init_plugins();
@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  constructor(public _modalservice: ModalinteractionService) {}

  ngOnInit() {
    init_plugins();
  }

  showDialog() {
    // this.ocultar = false;
    // console.log(this.ocultar);
    this._modalservice.changeEstate(false);
  }
}
