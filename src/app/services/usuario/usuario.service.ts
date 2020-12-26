import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


import { Observable, throwError, of } from 'rxjs';
import {catchError, map, retry, mergeMap} from 'rxjs/operators';
import {API_VERSION, URL_AUTENTICACION, URL_SERVICIOS} from 'src/app/config/config';
import {Usuario} from 'src/app/models/usuario.model';
import {LoginRequest} from '../../models/loginrequest.model';

// import {handleError} from '../service.index';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'
    }),
  responseType: 'json' as const,
  withCredentials: true as const,  
  observe: 'response' as const
};
@Injectable({providedIn: 'root'})
export class UsuarioService {
  //usuario: Usuario;
  //token: string;

  constructor(public http: HttpClient) {
    console.log('Servicio de usuario listo');
    this.cargarStorage();
  }

  cargarStorage() {
    return new Observable<Usuario>(sub => {
      try {
        if (localStorage.getItem('user')) {
          sub.next(JSON.parse(localStorage.getItem('user')) as Usuario);
        
      } else {
        sub.next(null);
      }
      sub.complete();
        
      } catch (error) {
        sub.error(error);
      }
      
     })
    
  }

  login(email: string, pass: string): Observable<Usuario> {
    console.log('ENTRE AL LOGIN');
    const uri = URL_SERVICIOS + API_VERSION + URL_AUTENTICACION;
    const bodyreq = new LoginRequest(email, pass);
    return this.http.post<Usuario>(uri, bodyreq, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response.body;
      })
    );
    
    
    
    //.pipe(catchError(this.handleError));
  }

  logout(): Observable < boolean > {
    console.log('DESLOGUEANDOSEEEE');
    const uri = `http://localhost:5001/api/v1/logout`;
    
    return this.cargarStorage().pipe(
      mergeMap((user) => {
        const body = { token: user.Token };
        return this.http.post(uri, body, httpOptions).pipe(
          map((response) => {
            if (response.status == 200) {
              return true;
            } else {
              return false;
            }
          })
        );
      })
    );

  }
  saveUserToLocalStorage =
      (user: Usuario) => {
        return new Promise((resolve, reject) => {
          localStorage.setItem('user', JSON.stringify(user));
          console.log(`Se esta escribiendo ${user}`);
          
        });
      }
  
      

  
  crearUsuario(usuario: Usuario): Observable<any> {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
    /* return this.http.post(url, usuario).pipe(map((resp: any) => {
      // swal('Usuario creado',usuario.email,'success');
      //this.notifierService.notify('success', 'Usuario creado');
      //return usuario;
    })); */
  }



  /*   crearUsuario(usuario: Usuario): Observable<any> {
      let url = URL_SERVICIOS + '/usuario';
      return this.http.post(url, usuario).pipe(map((resp: any) => {
        // swal('Usuario creado',usuario.email,'success');
        this.notifierService.notify('success', 'Usuario creado');
        return usuario;
      }));
    } */

  /*   cargarStorage() {
      if (localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
        this.usuario = JSON.parse(localStorage.getItem('usuario'))
      } else {
        this.token = '';
        this.usuario = null;
      }
    } */


  /* logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  } */
  /*  login():
     Observable<any> {
     let url = URL_SERVICIOS + '/api/v1/autenticar';
     return this.http.post(url, usuarioreq, httpOptions).pipe();
     /* return this.http.post(url, usuarioreq).pipe(map((resp: any) => {
       console.log(resp);
       // localStorage.setItem('id', resp.id);
       localStorage.setItem('token', resp.token);
       // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
       // this.usuario = usuario;
       // this.token = resp.token;

     }));
   } */

  /* estaLogueado() {
    return (this.token.length > 5) ? true : false;
    return true;
  } */
}
