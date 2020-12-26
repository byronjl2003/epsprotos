import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidevarService, UsuarioService } from 'src/app/services/service.index';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { logout } from '../../actions/auth.actions';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  username: string;
  //usernamesub: Subscription;
  usernameobs: Observable<any>;
  constructor(private store: Store<fromRoot.appState>, public _sidebar: SidevarService, public _usuarioService: UsuarioService) {
    this.usernameobs = this.store.pipe(select(fromRoot.selectUser), map(({Username}) => Username))
   }
  ngOnDestroy(): void {
    console.log('Destroy sidebar')
  }
  llogout(): void {
    this.store.dispatch(logout());
  }
  ngOnInit() {
  }

}
