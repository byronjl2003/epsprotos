import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {Usuario} from '../models/usuario.model';
import {UsuarioService} from '../services/service.index';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  constructor(public router: Router, public _usuarioService: UsuarioService) {}

  ngOnInit() {
    init_plugins();
  }
  ingresar(forma: NgForm) {
    console.log('INGRESANDO');
    console.log(forma.valid);
    console.log(forma.value);
    /*
    lecleart usuario = new Usuario(null,forma.value.email,forma.value.password);

    this._usuarioService.login(usuario,forma.value.recuerdame).subscribe(resp=>{
      console.log(resp);
      this.router.navigate(['/dashboard']);
    });
    */
    this.router.navigate(['/Administracion']);
  }
}
