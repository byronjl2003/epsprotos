import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import {PipesModule} from '../pipes/pipes.module';

import {BaseRecursoComponent} from './base-recurso/base-recurso.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {CardClimaComponent} from './card-clima/card-clima.component';
import {CoolCardLargeComponent} from './cool-card-large/cool-card-large.component';
import {CoolCardComponent} from './cool-card/cool-card.component';
import {DarkCardHoverComponent} from './dark-card-hover/dark-card-hover.component';
import {DrawerComponent} from './drawer/drawer.component';
import {HeaderComponent} from './header/header.component';
import {ListPagComponent} from './list-pag/list-pag.component';
import {ListingConsolidadoComponent} from './listing-consolidado/listing-consolidado.component';
import {ListingEncuestaComponent} from './listing-encuesta/listing-encuesta.component';
import {ListingComponent} from './listing/listing.component';
import {ModalCreacionComponent} from './modal-creacion/modal-creacion.component';
import {ModalUnidadModComponent} from './modal-unidad-mod/modal-unidad-mod.component';
import {ModalUnidadComponent} from './modal-unidad/modal-unidad.component';
import {ModalUsuarioModComponent} from './modal-usuario-mod/modal-usuario-mod.component';
import {ModalUsuarioComponent} from './modal-usuario/modal-usuario.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { ModaldefinitivoComponent } from './modaldefinitivo/modaldefinitivo.component';
import { ListingPagFormulariosComponent } from './listing-pag-formularios/listing-pag-formularios.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent, HeaderComponent,          NopagefoundComponent,
    SidebarComponent,     BaseRecursoComponent,     ModalCreacionComponent,
    CoolCardComponent,    CoolCardLargeComponent,   DarkCardHoverComponent,
    ListingComponent,     ModalUsuarioComponent,    ModalUsuarioModComponent,
    ModalUnidadComponent, ModalUnidadModComponent,  ListingConsolidadoComponent,
    CardClimaComponent,   ListingEncuestaComponent, DrawerComponent,
    ListPagComponent,     DrawerComponent,  ModaldefinitivoComponent, ListingPagFormulariosComponent, 


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
    CardClimaComponent,
    ListingEncuestaComponent,
    ListPagComponent,
    DrawerComponent,
    ModaldefinitivoComponent,

  ],
  imports: [
    RouterModule, CommonModule, PipesModule, NgxDatatableModule, NzDrawerModule,
    NzButtonModule, NzPopoverModule, NzModalModule, NzTableModule ,

  ]
})
/**
 * ESTE MODULO ES PARA LOS COMPONENTES QUE SE USARAN EN VARIAS PAGINAS
 *
 * ENTRE ELLOS ESTAN MODALES, LISTAS DE PAGINAS, ETC..
 */
export class SharedModule {
}