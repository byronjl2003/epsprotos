import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {LoginGuardGuard} from './guards/login-guard.guard';
import {SettingsService, SharedService, SidevarService, UsuarioService} from './service.index';



@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SidevarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
  ]
})
export class ServiceModule {
}
