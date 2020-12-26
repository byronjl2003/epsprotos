import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Store, select } from '@ngrx/store';
import {API_VERSION, URL_AUTENTICACION, URL_SERVICIOS} from '../config/config';
import * as fromRoot from '../reducers';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /* intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
      return next.handle(req);
  } */
  tokensub: Subscription;
  token: string;
  constructor(private store: Store<fromRoot.appState>) {
    this.tokensub = this.store.pipe(select(fromRoot.selectUserToken))
      .subscribe((val) => { this.token = val; });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('EN EL INTERCEPTOR::: ', this.token);
    let strcompare = `${URL_SERVICIOS}${API_VERSION}${URL_AUTENTICACION}` 
    console.log(strcompare);
    console.log(req.url);
    if (req.url !== strcompare) {
      console.log("ENTRE AL IF!");
        let tokenizedReq =
          req.clone({setHeaders: {'Authorization': `Bearer ${this.token}`}});
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
