import { createReducer, on } from '@ngrx/store';
import { requestFail, authorizationFail } from '../actions/error.actions';



export interface errorState {
    authorizationError: boolean;
    httpError: boolean;
    strHttpError: string;
    errorCode: number;
};

export const initialState: errorState = {
    authorizationError: false,
    httpError: false,
    strHttpError: '',
    errorCode: 0
}

const _errorReducer = createReducer(
    initialState,
    on(requestFail, (state, { msg, errorCode }) => ({ ...state, httpError: true, strHttpError: msg, errorCode })),
    on(authorizationFail, (state) => ({ ...state, authorizationError: true }))
); 

export function errorReducer(state, action) {
    return _errorReducer(state, action);
 }