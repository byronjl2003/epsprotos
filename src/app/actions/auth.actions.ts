// [SOURCE] EVENT
import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';

export const login = createAction(
    '[Login Page] Login',
    props<{ username: string, password: string }>()
);
export const logout = createAction(
    '[Main] Logout'
);

export const loginSuccess = createAction(
    '[Api Actions] Login Success',
    props<{ user: Usuario }>()
);

export const loginFailure = createAction(
    '[Api Actions] Login Failure',
    props<{ error: any }>()
);

export const startLoadingLogin = createAction(
    '[Main] start Loading Login'
)
export const stopLoadingLogin = createAction(
    '[Main] stop Loading Login'
)

export const loadUserFromLocalStorage = createAction(
    '[login-guard] Load User From Local Storage'
)
/* export const increment = createAction('[auth] increment');
export const decrement = createAction('[auth] decrement');
export const reset = createAction('[auth] reset'); */