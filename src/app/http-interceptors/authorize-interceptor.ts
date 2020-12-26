import {HttpClient,HttpHeaders,HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subscription, of} from 'rxjs';
import { Store, select } from '@ngrx/store';
//import {API_VERSION, URL_AUTENTICACION, URL_SERVICIOS} from '../config/config';
import * as fromRoot from '../reducers';
import { catchError, tap, map } from 'rxjs/operators';

import { logout } from '../actions/auth.actions';
import { authorizationFail, requestFail } from '../actions/error.actions';

/** Pass untouched request through to the next request handler. */
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
@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {
    /* intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req);
    } */
  
    tokensub: Subscription;
    token: string;
    constructor(private http: HttpClient, private store: Store<fromRoot.appState>) {
    
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
   
        return next.handle(req).pipe(
          
            
            catchError(err => {
                console.log('HOLA DESDE AuthorizationInterceptor ERROR')
                console.log('URL de error: ', req.url);
                if (err instanceof HttpErrorResponse && err.status != 401) {
                    return next.handle(req);
                }
                else {
                    if (err.status != 401 && req.url == 'http://localhost:5001/api/v1/refresh') {
                        //BIENE DESPUES DE UN INTENTO POR REFRESCAR EL TOKEN
                        this.store.dispatch(authorizationFail());
                        this.store.dispatch(logout());
                        return next.handle(req);
                    } else {
                        let uri = 'http://localhost:5001/api/v1/refresh';
                            this.http.post(uri, httpOptions).pipe(
                                map((response:any) => {
                                    console.log(response)
                                    return response.body;
                                })
                            ).subscribe(resp => {
                                console.log('EL NUEVO TOKEN::',resp)
                            });
                        return next.handle(req);
                    }
                 }
                 
            })
        );
    }
}
