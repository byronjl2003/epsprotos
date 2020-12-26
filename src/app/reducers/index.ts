import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  ActionReducer,
} from '@ngrx/store';
import { adminState, adminReducer } from './admin.reducer';
import { authState, authReducer } from './auth.reducer';
import { errorState, errorReducer } from './error.reducer';
import { uiState, uiReducer } from './ui.reducer';
import { formularioState, formularioReducer } from './formulario.reducer';
export interface appState { 
    auth: authState;
    admin: adminState;
    error: errorState;
  ui: uiState;
  formulario: formularioState;
}

export const reducers: ActionReducerMap<appState> = {
    auth: authReducer,
    admin: adminReducer,
  error: errorReducer,
  ui: uiReducer,
    formulario: formularioReducer,
}

export const selectauth = (state: appState) => state.auth;
export const selectui = (state: appState) => state.ui;
export const selectformulario = (state: appState) => state.formulario;
// -----------------FORMULARIO---------------------
export const selectFEs = createSelector(
  selectformulario,
  (state: formularioState) => state.fes
);
export const selecFCls = createSelector(
  selectformulario,
  (state: formularioState) => state.fcl
);

export const selecmemGrs = createSelector(
  selectformulario,
  (state: formularioState) => state.memgrupos
);
export const selecGrs = createSelector(
  selectformulario,
  (state: formularioState) => state.selecgrupos
);

export const selecGruposEdd = createSelector(
  selectformulario,
  (state: formularioState) => ({selec: state.selecgrupos, mem: state.memgrupos})
);

export const selecFormularios = createSelector(
  selectformulario,
  (state: formularioState) => state.formularios
);

export const selecTotalFormularios = createSelector(
  selectformulario,
  (state: formularioState) => state.totalforms
);

export const selectLoadingFormularios = createSelector(
  selectformulario,
  (state: formularioState) => state.loadingforms
);
//----------------------------------
export const selectLoadingAuthentication = createSelector(
  selectauth,
  (state: authState) => state.loadingAuthentication
)

export const selectUser = createSelector(
  selectauth,
  (state: authState) => state.user
)
export const selectUserToken = createSelector(
  selectauth,
  (state: authState) => {
    console.log('SELECTOR: TOKEN')
    
    return typeof state.user != 'undefined' ? state.user.Token : '';
  }
);



export const selectModalState = createSelector(
  selectui,
  (state: uiState) => (state.dialogOpen)
);