import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
//import { UsuarioService } from '../services/usuario/usuario.service';
//import { login, loginSuccess, loginFailure, logout, loadUserFromLocalStorage } from '../actions/auth.actions';
import { of } from 'rxjs';
import {Router} from '@angular/router';
import { FormularioService } from '../services/service.index';
import {
    getFEs, setFEs, getFCl, setFCl, getGrs,
    setGrs, saveForm, getFormularios, setFormularios, stopLoadingForms, stopLoadingCreation, saveClimaForm
} from '../actions/formulario.actions';
import {requestFail} from '../actions/error.actions'
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Formulario } from '../models/formulario.model';
import { GrupoPregunta } from 'src/app/models/grupopregunta.model';

import { showOkMessage, showErrorMessage } from '../actions/ui.actions';
import { FormularioItem, FormularioResponse } from '../interfaces';
@Injectable()
export class FormularioEffects {
    constructor(private actions: Actions,
                private store: Store<fromRoot.appState>,
                private _service: FormularioService, ) { }

    
    
    getFormularios$ = createEffect(() =>
        this.actions.pipe(
            ofType(getFormularios),
            mergeMap(action => {
                return this._service.getFormularios(action.limit,action.offset).pipe(
                    map((info: FormularioResponse) => {
                        var newforms: FormularioItem[] = [];
                        info.formularios.forEach((val) => {
                            newforms.push({ formulario: val, loading: false });
                        })
                        return setFormularios({formularios: newforms, totalforms: info.count})
                    }),
                    catchError(error => {
                        console.log('BBBB:', error);
                        return of(showErrorMessage({ msg: 'Error de conexion con el servidor' }));
                    })
                )
                
            })
        )
    )
    
    getFactoresEs$ = createEffect(() =>
        this.actions.pipe(
            ofType(getFEs),
            mergeMap(action => {
                return this._service.getFactoresEstadisticos().pipe(
                    map((factores) => {
                        return setFEs({ fes: factores });
                    }),
                    catchError(error => {
                        console.log('BBBB:', error);
                        return of(showErrorMessage({ msg: 'Error al traer factores' }));
                    })
                )
                
            })
        )
            
    );

    getFactoresCl$ = createEffect(() =>
        this.actions.pipe(
            ofType(getFCl),
            mergeMap(action => {
                return this._service.getFactoresClima().pipe(
                    map((factores) => {
                        return setFCl({ fcl: factores });
                    }),
                    catchError(error => {
                        console.log('BBBB:', error);
                        return of(showErrorMessage({ msg: 'Error Al traer Factores' }));
                    })
                )
                
            })
            
        )
    );

    getGrupos$ = createEffect(() => 
        this.actions.pipe(
            ofType(getGrs),
            withLatestFrom(this.store.select(fromRoot.selecGruposEdd)),
                    mergeMap(([action, edds]) => {
                        console.log(edds);
                        console.log(action.idfac)
                        let grupos = edds.mem[action.idfac];
                        console.log(grupos);
                        if (typeof grupos === 'undefined') {
                            //NO SE A DESCARGADO LA INFO DE LOS GRUPOS
                            return this._service.getGruposFactor(action.idfac).pipe(
                                map((data) => {
                                    return setGrs({ grs: data, idfac: action.idfac, flag: true })
                                 })
                            )
        
                        } else {
                            return of(setGrs({ grs: grupos, idfac: action.idfac, flag: false }))
                        }
                        
                    })
                
            )
    )
    

    saveClimaFormulario$ = createEffect(() =>
        this.actions.pipe(
            ofType(saveClimaForm),
            mergeMap((action) => {
                return this._service.saveFormularioClima(action.grupo).pipe(
                    map((response) => {
                        this.store.dispatch(showOkMessage({ msg: 'Formulario creado correctamente' }));
                        return setFCl({ fcl: [] });
                        
                    }),
                    catchError(error => {
                        console.log('BBBB:', error);
                        return of(showErrorMessage({ msg: 'Ocurrio un problema en el servidor cuando se intento crear un nuevo factor. Contactar con admin' }));
                    })
                )
                
            })
        )
    )
    saveFormulario$ = createEffect(() =>
        this.actions.pipe(
            ofType(saveForm),
            withLatestFrom(this.store.select(fromRoot.selecGruposEdd)),
            mergeMap(([action, edds]) => {
                //TENGO QUE HACER UN ARREGLO CON LOS GRUPOS SELECCIONADOS...above
                let grupos = Object.values(edds.selec);
                const gruposarr: GrupoPregunta[] = grupos.flat();
                console.log(gruposarr);
                const newform: Formulario = new Formulario(-1, action.name, 'F', -1, -1, action.faces, gruposarr);
                let sub = this._service.saveFormulario(newform).subscribe(
                    (response) => {
                        this.store.dispatch(stopLoadingCreation());
                        if (response.status == 201 || response.status == 200) {
                            this.store.dispatch(showOkMessage({ msg: 'Formulario creado correctamente' }));
                        }else {
                            this.store.dispatch(showErrorMessage({msg:'Ocurrio un Error al crear el formulario'}))
                        }
                        //sub.unsubscribe();
                    }
                );
                return of();
            })
        ),{ dispatch: false}
    )
    

    

    /* getGrupos$ = createEffect(() =>
        this.actions.pipe(
            ofType(getGrs),
            withLatestFrom(this.store, (action, state) => ({ action: action, memgrs: state.formulario.memgrupos, selecgrs: state.formulario.selecgrupos })),
            mergeMap(({ action, memgrs, selecgrs }) => {
                
                let grupos = memgrs[action.idfac];
                if (typeof grupos === 'undefined') {
                    //NO SE A DESCARGADO LA INFO DE LOS GRUPOS
                    this._service.getGruposFactor(action.idfac).subscribe(data => {
                        return of(setGrs({ grs: data, idfac: action.idfac, flag: true }))
                    })

                } else {
                    return of(setGrs({ grs: grupos, idfac: action.idfac, flag: false }))
                }
                
            }
                
            )
        )
    ); */

    
    

}



