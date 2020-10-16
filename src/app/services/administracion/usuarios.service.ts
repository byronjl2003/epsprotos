import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_VERSION, URL_SERVICIOS, URL_UNIDADALL} from 'src/app/config/config';

import {Usuario} from 'src/app/models/usuario.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  responseType: 'json' as const ,
  observe: 'response' as const
};

@Injectable({providedIn: 'root'})
export class UsuariosService {
  private _usuarioSource = new Subject<Usuario>();
  unidadState$ = this._usuarioSource.asObservable();
  changeUnidadState(usuario: Usuario) {
    this._usuarioSource.next(usuario);
  }

  constructor(public http: HttpClient) {}
  create(obje: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  modidy(obje: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(obje: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getall(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  get(id: number): Observable<any> {
    const uri = `${URL_SERVICIOS}${API_VERSION}${URL_UNIDADALL}/${id}`;
    return this.http.get<Usuario[]>(uri, httpOptions).pipe(map(resp => {
      return resp.body;
    }));
  }
}
