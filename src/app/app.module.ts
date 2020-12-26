// import {JwPaginationComponent} from 'jw-angular-pagination';
/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

//NGRX
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth.reducer';

import {AppComponent} from './app.component';
// RUTAS
import {APP_ROUTES} from './app.routes';
import {AuthInterceptor} from './http-interceptors/auth-interceptors';


import {LoginComponent} from './pages/login/login.component';

// MODULOS
import {PagesModule} from './pages/pages.module';
// SERVICIOS
import {ServiceModule} from './services/service.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { ErrorEffects } from './effects/error.effects';
import { UiEffects } from './effects/ui.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './reducers/index';
import * as interceptores from './http-interceptors';
import { FormularioEffects } from './effects/formulario.effects';

@NgModule({
  declarations: [
    AppComponent, LoginComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES, PagesModule, FormsModule, ServiceModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, HttpClientModule,
    NzButtonModule, NzDrawerModule,NzNotificationModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects,ErrorEffects,UiEffects, FormularioEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  exports: [
    NzDrawerModule,
    NzButtonModule,

  ],
  providers:
      [interceptores.interceptors, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
  /**
 * MODULO PRINCIPAL DE LA APLICACION
 *
 * lol
 */
export class AppModule {
}
