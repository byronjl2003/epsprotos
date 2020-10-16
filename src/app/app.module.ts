// import {JwPaginationComponent} from 'jw-angular-pagination';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { ImagenPipe } from './pipes/imagen.pipe';
import {NotifierModule} from 'angular-notifier';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
// import {NzSpinModule} from 'ng-zorro-antd/spin';

// ZORRO
import {NzMessageModule} from 'ng-zorro-antd/message';

import {AppComponent} from './app.component';
// RUTAS
import {APP_ROUTES} from './app.routes';
import {AuthInterceptor} from './http-interceptors/auth-interceptors';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
// MODULOS
import {PagesModule} from './pages/pages.module';
// SERVICIOS
import {ServiceModule} from './services/service.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent

  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule, FormsModule, ServiceModule,
    ReactiveFormsModule, NotifierModule, NzMessageModule,
    BrowserAnimationsModule, HttpClientModule, NzButtonModule, NzDrawerModule, StoreModule.forRoot({}, {})

  ],
  exports: [
    NzDrawerModule,
    NzButtonModule,

  ],
  providers:
      [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
