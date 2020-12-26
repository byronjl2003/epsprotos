/*import { Action } from '@ngrx/store';

 export function authReducer(state:number = 10, action:Action) {
    switch (action.type) { 
        case 'INCREMENTAR':
            return state + 1;
        case 'DECREMENTAR':
            return state - 1;
        default:
            return state;
    }    
} */


import { createReducer, on } from '@ngrx/store';
import { login, logout, loginFailure, loginSuccess, startLoadingLogin, stopLoadingLogin } from '../actions/auth.actions';

import { Usuario } from '../models/usuario.model';

export interface authState { 
  user: Usuario | null;
  isAuthenticated: boolean;
  loadingAuthentication: boolean;
  errorAuthentication: boolean;
  errorMessage: string;
};

export const initialState: authState = {
  user: null,
  isAuthenticated: false,
  loadingAuthentication: false,
  errorAuthentication: false,
  errorMessage: '',
};



const _authReducer = createReducer(
  initialState,
  on(login, (state) => ({...state,loadingAuthentication: true})),
  on(logout, (state) => ({...state,loadingAuthentication:true, user: null})),
  on(loginSuccess, (state, { user }) => ({...state, loadingAuthentication: false, user: user})),
  on(loginFailure, (state, { error}) => ({...state, loadingAuthentication: false, errorMessage: error.msg, errorAuthentication: true}))
  
);
 
export function authReducer(state, action) {
  return _authReducer(state, action);
}


