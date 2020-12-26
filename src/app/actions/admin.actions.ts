import { createAction, props } from '@ngrx/store';

export const initAdminData = createAction(
    '[Main Page] init Admin Data',
    props<{ username: string }>()
);