import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../../reducers/index';
import { select, Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import { loadUserFromLocalStorage} from '../../actions/auth.actions'
@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  sub: Subscription;
  usuario: Usuario = null;
  constructor(private store: Store < fromRoot.appState >, public router: Router){
    this.store.dispatch(loadUserFromLocalStorage());
    this.sub = this.store.pipe(select(fromRoot.selectUser))
      .subscribe((val) => {
      this.usuario = val;
    });
  
  }
  canActivate() {
    console.log('PASO POR EL LOGIN GUARD');
    if ( this.usuario!= null){
      console.log('YEIII, AUTENTICADO!!');
      return true;
    }
    else{
      console.log("FFFF :(");
      this.router.navigate(['/login']);
      return false;
    }


    
  }

}
