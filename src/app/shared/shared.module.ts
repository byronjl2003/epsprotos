import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PipesModule} from '../pipes/pipes.module';

import {BaseRecursoComponent} from './base-recurso/base-recurso.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {CoolCardLargeComponent} from './cool-card-large/cool-card-large.component';
import {CoolCardComponent} from './cool-card/cool-card.component';
import {DarkCardHoverComponent} from './dark-card-hover/dark-card-hover.component';
import {HeaderComponent} from './header/header.component';
import {ListingComponent} from './listing/listing.component';
import {ModalCreacionComponent} from './modal-creacion/modal-creacion.component';
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
  ],
  imports: [
    RouterModule, CommonModule, PipesModule

  ]
})
export class SharedModule {
}