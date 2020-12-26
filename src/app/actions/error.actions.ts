import { createAction, props } from '@ngrx/store';


export const requestFail = createAction(
    '[AuthorizeInterceptor] Request Fail',
    props<{ msg: string, errorCode: number }>()
);

export const authorizationFail = createAction(
    '[AuthorizeInterceptor] Request Fail'
    
);