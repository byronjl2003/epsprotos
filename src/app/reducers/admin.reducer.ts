import { on, createReducer } from '@ngrx/store';
import { initAdminData } from '../actions/admin.actions'
export interface adminState {
    user: string;
}

export const initialState: adminState =
{
    user: '',
};

const _adminReducer = createReducer(
  initialState,
    on(initAdminData, (state, {username }) => ({...state, user: username})),
);
 
export function adminReducer(state, action) {
  return _adminReducer(state, action);
}