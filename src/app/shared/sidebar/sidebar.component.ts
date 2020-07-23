import { Component, OnInit } from '@angular/core';
import { SidevarService, UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidevarService,public _usuarioService:UsuarioService) {
    
   }

  ngOnInit() {
  }

}
