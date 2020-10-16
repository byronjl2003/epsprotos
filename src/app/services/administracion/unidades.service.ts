import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {API_VERSION, URL_SERVICIOS, URL_UNIDADALL} from 'src/app/config/config';


import {Unidad} from '../../models/unidad.model';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  responseType: 'json' as const ,
  observe: 'response' as const
};
@Injectable({providedIn: 'root'})
export class UnidadesService {
  private _unidadSource = new Subject<Unidad>();
  unidadState$ = this._unidadSource.asObservable();
  changeUnidadState(unidad: Unidad) {
    this._unidadSource.next(unidad);
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
    console.log('ENTRE AL getall de Unidades');
    const uri = URL_SERVICIOS + API_VERSION + URL_UNIDADALL;
    // const bodyreq = new LoginRequest(email, pass);
    return this.http.get<Unidad[]>(uri, httpOptions).pipe(map(resp => {
      return resp.body;
    }));
  }
  get(id: number): Observable<any> {
    const uri = `${URL_SERVICIOS}${API_VERSION}${URL_UNIDADALL}/${id}`;
    return this.http.get<Unidad[]>(uri, httpOptions).pipe(map(resp => {
      return resp.body;
    }));
  }
}
