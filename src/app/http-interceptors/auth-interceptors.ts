import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {API_VERSION, URL_AUTENTICACION, URL_SERVICIOS} from '../config/config';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /* intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
      return next.handle(req);
  } */

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url !== `${URL_SERVICIOS}${API_VERSION}${URL_AUTENTICACION}`) {
      let tokenizedReq =
          req.clone({setHeaders: {Authotization: 'Bearer xx.yy.zz'}});
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
