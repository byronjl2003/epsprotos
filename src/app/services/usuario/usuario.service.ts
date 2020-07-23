import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
// import swal from 'sweetalert';
import {NotifierService} from 'angular-notifier';
import {map} from 'rxjs/operators';
import {URL_SERVICIOS} from 'src/app/config/config';
import {Usuario} from 'src/app/models/usuario.model';


@Injectable({providedIn: 'root'})
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(
      public http: HttpClient, public router: Router,
      public notifierService: NotifierService) {
    console.log('Servicio de usuario listo');
    this.cargarStorage();
  }
  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario).pipe(map((resp: any) => {
      // swal('Usuario creado',usuario.email,'success');
      this.notifierService.notify('success', 'Usuario creado');
      return usuario;
    }));
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
  login(usuario: Usuario, recuerdame: boolean = false) {
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario).pipe(map((resp: any) => {
      localStorage.setItem('id', resp.id);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.usuario = usuario;
      this.token = resp.token;

      return true;
    }));
    return true;
  }
  estaLogueado() {
    // return (this.token.length > 5) ? true : false;
    return true;
  }
}
