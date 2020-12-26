import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {LoginGuardGuard} from './guards/login-guard.guard';
import {DrawerinteractionService, SettingsService, SharedService, SidevarService, UnidadesService, UsuarioService, UsuariosService, FormularioService} from './service.index';



@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService, SidevarService, SharedService, UsuarioService,
    LoginGuardGuard, DrawerinteractionService, UsuariosService, UnidadesService, FormularioService

  ]
})
export class ServiceModule {
}
