import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup
  constructor(
    public _usuarioService:UsuarioService,
    public router: Router,
    public notifierService: NotifierService
    ) { }

  validaciones(c1: string, c2: string){

    return (group: FormGroup)=>{
      let pass1 = group.controls[c1].value;
      let pass2 = group.controls[c2].value;

      if ( pass1 === pass2){
        return null
      }
      return {
        sonIguales: true
      }

    };


  }

  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required]),
      password2: new FormControl(null,[Validators.required]),
      condiciones: new FormControl(false)
    },{validators: this.validaciones('password','password2')})
  }
  registrarUsuario(){
    console.log(this.forma.valid);
    console.log(this.forma.value);
    if ( this.forma.invalid){
      return;
    }
    if ( !this.forma.value.condiciones){
      //swal("Importante","DEbE DE ACEPTADR LAS CONDICIONES",'warning');
      this.notifierService.notify("success", "Debe de aceptar las condiciones");
      console.log('DEbE DE ACEPTADR LAS CONDICIONES');
      return;
    }

    console.log("REGISTRANDO");
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );
    this._usuarioService.crearUsuario(usuario).subscribe( resp => {
      console.log( resp );
      this.router.navigate(['/login'])
    });

  }

}
