
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptors';
import {AuthorizeInterceptor} from './authorize-interceptor'
export const interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true} 
];