import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario/usuario.service';
import { requestFail, authorizationFail} from '../actions/error.actions';
import { of } from 'rxjs';
import {Router} from '@angular/router';

//import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class ErrorEffects {
    constructor(
        private actions: Actions,
        private notification: NzNotificationService,
        private router: Router,
    ) { }

    showHttpError$ = createEffect(() =>
        this.actions.pipe(
            ofType(requestFail),
            mergeMap(action => {
                this.notification.error('Ocurrio un error', 'Error en el servidor de contenido')
                return of(requestFail({ msg: action.msg, errorCode: action.errorCode }))
            })
        ), { dispatch: false }
    );
    
    showAuthorizationError$ = createEffect(() =>
        this.actions.pipe(
            ofType(authorizationFail),
            mergeMap(action => {
                this.notification.warning('Error de Autenticacion', 'Ya no tiene la potestad de ver este contenido, FFF');
                return of(authorizationFail());
            })
        ), { dispatch: false }
    );




}