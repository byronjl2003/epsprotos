import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario/usuario.service';
import { login, loginSuccess,loginFailure, logout, } from '../actions/auth.actions';
import { of } from 'rxjs';
import {Router} from '@angular/router';
@Injectable()
export class AuthEffects {
    constructor(
        private actions: Actions,
        private _service: UsuarioService,
        private router: Router,
    ) { }

    loginE$ = createEffect(() =>
        this.actions.pipe(
            ofType(login),
            exhaustMap(action =>
                this._service.login(action.username, action.password).pipe(
                    map((user) => {
                        this._service.saveUserToLocalStorage(user);
                        this.router.navigate(['/']);
                        return loginSuccess({ user });
                        
                     }),
                    catchError(error => of(loginFailure(error)))
                ))));
}