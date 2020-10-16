
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';

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
  isLoadingOne = false;
  public loginForm = this.fb.group({
    email: ['byronjl2003@gmail.com', [Validators.required, Validators.email]],
    password: ['123456789', [Validators.required]]
  });



  constructor(
      public router: Router, public _usuarioService: UsuarioService,
      private fb: FormBuilder, private message: NzMessageService) {}



  ngOnInit() {
    init_plugins();
  }
  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }
  activateLoginSpinner(): void {
    this.isLoadingOne = true;
  }
  deactivateLoginSpinner(): void {
    this.isLoadingOne = false;
  }
  ingresar(forma: NgForm) {
    console.log('INGRESANDO');
    /* console.log(forma.valid);
    console.log(forma.value); */
    console.log(forma.value.username);
    console.log('-------------');
    /*
    lecleart usuario = new Usuario(null,forma.value.email,forma.value.password);

    this._usuarioService.login(usuario,forma.value.recuerdame).subscribe(resp=>{
      console.log(resp);
      this.router.navigate(['/dashboard']);
    });
    */
    this.message.info('This is a normal message');
  }
  login() {
    // console.log(this.loginForm.value.email);
    // console.log(this.loginForm.value.password);

    this.activateLoginSpinner();
    let loginobs =
        this._usuarioService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(catchError(this.handleError));
    const unsub = loginobs.subscribe(resp => {
      console.log('RESP::', resp);
      /* const keys = resp.headers.keys();
      const headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
      console.log(headers); */
      console.log(resp.body);
      const user: Usuario = new Usuario(
          resp.body.Username, resp.body.Idrol, resp.body.Rol, resp.body.Token,
          resp.body.RefreshToken);
      console.log(user);
      this._usuarioService.saveUserToLocalStorage(user).then(x => {
        console.log(x);
      });
      console.log('SE TERMINO DE GRABAR AL LOCAL STORAGE');
      this.deactivateLoginSpinner();
      this.router.navigate(['/']);
    });
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.message.error(`Error1: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${JSON.stringify(error.error)}`);
      this.message.error(`Error2: ${error.error.msg}`);
    }

    // Return an observable with a user-facing error message.
    this.deactivateLoginSpinner();
    return throwError(error.error);
  }
}
