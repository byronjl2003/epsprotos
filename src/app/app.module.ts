import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
// import {JwPaginationComponent} from 'jw-angular-pagination';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
// import { ImagenPipe } from './pipes/imagen.pipe';
import {NotifierModule} from 'angular-notifier';

import {AppComponent} from './app.component';
// RUTAS
import {APP_ROUTES} from './app.routes';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';
// MODULOS
import {PagesModule} from './pages/pages.module';
// SERVICIOS
import {ServiceModule} from './services/service.module';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,
    // NopagefoundComponent,
    RegisterComponent,  // JwPaginationComponent
    //  ImagenPipe,
    // PlusbtnComponent,

    // GraficoDonaComponent,
    // IncrementadorComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // PagesComponent,

  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule, FormsModule, ServiceModule,
    ReactiveFormsModule, NotifierModule, NgxDatatableModule
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
