import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import {FactorEstadistico} from '../../models/factorestadistico.model'
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { Faces, Faccl, GPregus } from '../interfaces/index';
import { FactorClima } from '../../models/factorclima.model';
import { GrupoPregunta } from 'src/app/models/grupopregunta.model';
import { Formulario } from 'src/app/models/formulario.model';
import {FormularioResponse} from '../../interfaces'
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'
    }),
  responseType: 'json' as const,
  withCredentials: true as const,  
  observe: 'response' as const
};

@Injectable({
  providedIn: 'root'
})
  
export class FormularioService {

  constructor(public http: HttpClient) { }
  
  
  saveFormulario(form: Formulario): Observable<HttpResponse<any>> {
    const uri = 'http://localhost:5001/api/v1/administracion/fac_cl';
    return this.http.post(uri, form, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    ); 
  }
  
  saveFormularioClima(grupo: GrupoPregunta): Observable<HttpResponse<any>> {
    const uri = 'http://localhost:5001/api/v1/administracion/fac_cl';
    return this.http.post(uri, grupo, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    ); 
   }
  getFactoresEstadisticos(): Observable<FactorEstadistico[]> {
    console.log('Servicio: TraerFEs');
    const uri = 'http://localhost:5001/api/v1/administracion/fac_es?limit=100&offset=0';
    return this.http.get<Faces>(uri, httpOptions).pipe(
        map(response => {
        console.log(response);
        return response.body.estadisticos;
       })
    )
  }

  getFactoresClima(): Observable<FactorClima[]> {
    console.log('Servicio: TraerFcl');
    const uri = 'http://localhost:5001/api/v1/administracion/fac_cl?limit=100&offset=0';
    return this.http.get<Faccl>(uri, httpOptions).pipe(
        map(response => {
        console.log(response);
        return response.body.clima;
       })
    )
  }

  getGruposFactor(idfac: number): Observable<GrupoPregunta[]> {
    
    const uri = `http://localhost:5001/api/v1/administracion/grupos/preguntas?idfac=${idfac}`;
    return this.http.get<GPregus>(uri, httpOptions).pipe(
        map(response => {
        console.log(response);
        return response.body.preguntas;
       })
    )
    
  }

  getFormularios(limit: number, offset: number): Observable<FormularioResponse> {
    const uri = `http://localhost:5001/api/v1/administracion/formulario?limit=${limit}&offset=${offset}`
    return this.http.get<FormularioResponse>(uri, httpOptions).pipe(
      map(response => {
        console.log('ESTOY EN EL PIPE DE LA TRAIDA DE LOS FORMULARIOS');
        console.log(response);
        return response.body;
      })
      
    )
    
  }

}
