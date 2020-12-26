import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { logout } from '../../actions/auth.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _usuarioService: UsuarioService,
    private store: Store<fromRoot.appState>,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  logout(): void {
    
    //mostrar modal de cerrando sesion
    
    //HACER LA PETICION DE DESLOGUEO A API
    this._usuarioService.logout().subscribe(
      (response) => {
        
        console.log("RESPUESTA DE LOGOUT", response);
        
        if (response) {
          localStorage.removeItem('user');
          this.router.navigate(['/login']);
        }
        else {
          console.log('NO SE PUDO CERRAR SESION');
        }
    
      }
    )
    
    //Borrar de localstorage info..
  }

}
