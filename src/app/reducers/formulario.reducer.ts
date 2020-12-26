import { createReducer, on } from '@ngrx/store';
import {
    getFEs, setFEs, getFCl,
    setFCl, setGrs, getGrs,
    clearGrs, getFormularios, setFormularios,
    startLoadingCreation, stopLoadingCreation,
    startLoadingForms, stopLoadingForms

} from '../actions/formulario.actions';
import { FactorEstadistico } from '../models/factorestadistico.model';
import { FactorClima } from '../models/factorclima.model';
import { GrupoPregunta } from '../models/grupopregunta.model';
import { Formulario } from '../models/formulario.model';
import { FormularioItem } from '../interfaces/index';



export interface formularioState {
    fes: FactorEstadistico[];
    fcl: FactorClima[];
    idg: number;
    memgrupos: { [idfactor: number]: GrupoPregunta[] };
    selecgrupos: { [idfactor: number]: GrupoPregunta[] };
    formularios: FormularioItem[];
    totalforms: number;
    loadingforms: boolean;
}

export const initialState: formularioState = {
    fes: [],
    fcl: [],
    idg: -1,
    memgrupos: {},
    selecgrupos: {},
    formularios: [],
    totalforms:0,
    loadingforms: false,
}
 
const _formularioReducer = createReducer(
    initialState,
    on(clearGrs, (state) => ({ ...state, selecgrupos: {}})),
    on(getFEs, (state) => ({ ...state })),
    on(setFEs, (state, { fes }) => ({ ...state, fes })),
    on(getFCl, (state) => ({ ...state })),
    on(setFCl, (state, { fcl }) => ({ ...state, fcl })),
    on(getGrs, (state) => ({ ...state })),
    on(setGrs, (state, { grs, idfac, flag}) => {
        //SE BUSCA EN MEMGRUPOS Y SE AGREGA..
        if (!flag) {
            console.log('SOLO SE VA A AGREGAR A SELEC..');
            //ESTA EN MEMORIA.. SE OBTIENE..
            //let grupos = state.memgrupos[idfac];
            return ({ ...state, selecgrupos: { ...state.selecgrupos, [idfac]: grs } });
        }
        else {
            console.log(' SE VA A AGREGAR A AMBOS..');
            //NO ESTA EN MEMORIA, HAY QUE AGREGARLA EN LOS DOS LUGARES..
            return ({ ...state, selecgrupos: { ...state.selecgrupos, [idfac]: grs }, memgrupos: { ...state.memgrupos, [idfac]: grs} });
        }
    }),
    on(getFormularios, (state) => ({ ...state })),
    on(setFormularios, (state, { formularios, totalforms }) => {
        
        return ({ ...state, formularios, totalforms});
        
    }),
    on(startLoadingForms, (state) => ({ ...state, loadingforms: true })),
    on(stopLoadingForms, (state) => ({...state, loadingforms: false})),

    


);

export function formularioReducer(state, action) {
    return _formularioReducer(state, action);
 }