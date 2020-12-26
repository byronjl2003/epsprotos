import { createAction, props } from '@ngrx/store';
import { FactorEstadistico } from '../models/factorestadistico.model';
import { FactorClima } from '../models/factorclima.model';
import { GrupoPregunta } from '../models/grupopregunta.model';
import { Formulario } from '../models/formulario.model';
import { FormularioItem } from '../interfaces/index';
export const getFEs = createAction(
    '[Formulario Page] Get Factores Estadisticos'
);
export const setFEs = createAction(
    '[Formulario Page] Set Factores Estadisticos',
    props<{fes: FactorEstadistico[]}>()
);

export const getFCl = createAction(
    '[Formulario Page] Get Factores Clima'
);

export const getGrs = createAction(
    '[Formulario Page] Get Grupos',
    props<{idfac: number}>()
)
export const setFCl = createAction(
    '[Formulario Page] Set Factores Clima',
    props<{fcl: FactorClima[]}>()
);

export const setGrupoActual = createAction(
    '[Formulario Page] Set Grupo Actual',
    props<{ idg: number }>()
);

export const setGrs = createAction(
    '[Formulario Page] Set Grupos',
    props<{ grs: GrupoPregunta[], idfac: number, flag: boolean}>()
);

export const clearGrs = createAction(
    '[Formulario Page] Clear Grupos'
    
);

export const saveForm = createAction(
    '[Formulario Page] Save Formulario',
    props<{ name: string, faces: FactorEstadistico[] }>()
);
export const saveClimaForm = createAction(
    '[Formulario Page] Save Formulario Clima',
    props<{ grupo: GrupoPregunta }>()
);

export const startLoadingCreation = createAction(
    '[Formulario Page] Start Loading'
);

export const stopLoadingCreation = createAction(
    '[Formulario Page] Start Loading'
);

export const getFormularios = createAction(
    '[Formulario Page] Get Formularios',
    props<{limit: number, offset: number}>()
);

export const setFormularios = createAction(
    '[Formulario Page] Set Formularios',
    props<{formularios: FormularioItem[], totalforms: number}>()

);

export const startLoadingForms = createAction(
    '[Formulario Page] Start Loading'
);

export const stopLoadingForms = createAction(
    '[Formulario Page] Start Loading'
);