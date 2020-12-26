import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario/usuario.service';
import { login, loginSuccess, loginFailure, logout, loadUserFromLocalStorage } from '../actions/auth.actions';
import { of } from 'rxjs';
import {Router} from '@angular/router';
@Injectable()
export class AuthEffects {
    constructor(
        private actions: Actions,
        private _service: UsuarioService,
        private router: Router,
    ) { }
    readUser$ = createEffect(() =>
        this.actions.pipe(
            ofType(loadUserFromLocalStorage),
            mergeMap(action =>
            {
                return this._service.cargarStorage().pipe(
                    map((user) =>
                    {
                        if (user == null) {
                            return loginFailure({ error: 'NO HAY USUARIOS EN EL LOCAL STORAGE' });
                        }
                        else {
                            return loginSuccess({ user });
                        }
                    })
                )
                catchError(error => of(loginFailure(error)))
            })
        )
    )
    loginE$ = createEffect(() =>
        this.actions.pipe(
            ofType(login),
            exhaustMap(action =>
                this._service.login(action.username, action.password).pipe(
                    map((user) => {
                        console.log("login")
                        this._service.saveUserToLocalStorage(user);
                        this.router.navigate(['/']);
                        return loginSuccess({user});
                        
                     }),
                    catchError(error => {
                        console.log("Error en la autenticacion");
                        return of(loginFailure(error));
                     })
                ))));
}