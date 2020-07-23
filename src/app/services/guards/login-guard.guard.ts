import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  constructor(public _usuarioService:UsuarioService,public router: Router){}
  canActivate() {
    console.log('PASO POR EL LOGIN GUARD');
    if ( this._usuarioService.estaLogueado()){
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
