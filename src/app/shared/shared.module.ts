import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {PipesModule} from '../pipes/pipes.module';

import {BaseRecursoComponent} from './base-recurso/base-recurso.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {CoolCardLargeComponent} from './cool-card-large/cool-card-large.component';
import {CoolCardComponent} from './cool-card/cool-card.component';
import {DarkCardHoverComponent} from './dark-card-hover/dark-card-hover.component';
import {HeaderComponent} from './header/header.component';
import {ListingConsolidadoComponent} from './listing-consolidado/listing-consolidado.component';
import {ListingComponent} from './listing/listing.component';
import {ModalCreacionComponent} from './modal-creacion/modal-creacion.component';
import {ModalUnidadModComponent} from './modal-unidad-mod/modal-unidad-mod.component';
import {ModalUnidadComponent} from './modal-unidad/modal-unidad.component';
import {ModalUsuarioModComponent} from './modal-usuario-mod/modal-usuario-mod.component';
import {ModalUsuarioComponent} from './modal-usuario/modal-usuario.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
    BaseRecursoComponent,
    ModalCreacionComponent,
    CoolCardComponent,
    CoolCardLargeComponent,
    DarkCardHoverComponent,
    ListingComponent,
    ModalUsuarioComponent,
    ModalUsuarioModComponent,
    ModalUnidadComponent,
    ModalUnidadModComponent,
    ListingConsolidadoComponent,

  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
    CoolCardComponent,
    CoolCardLargeComponent,
    DarkCardHoverComponent,
    ListingComponent,
    ModalUsuarioComponent,
    ListingConsolidadoComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    PipesModule,
    NgxDatatableModule,

  ]
})
export class SharedModule {
}