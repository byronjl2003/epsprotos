import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  ActionReducer,
} from '@ngrx/store';
import { adminState, adminReducer } from './admin.reducer';
import { authState, authReducer } from './auth.reducer';

export interface appState { 
    auth: authState;
    admin: adminState;
}

export const reducers: ActionReducerMap<appState> = {
    auth: authReducer,
    admin: adminReducer,
}

export const selectauth = (state: appState) => state.auth;

export const selectLoadingAuthentication = createSelector(
  selectauth,
  (state: authState) => state.loadingAuthentication
)

export const selectUser = createSelector(
  selectauth,
  (state: authState) => state.user
)