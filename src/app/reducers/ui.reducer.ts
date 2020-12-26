import { createReducer, on } from '@ngrx/store';
import { openFormularioModal,setFormularioModal, closeFormularioModal } from '../actions/ui.actions';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { TemplateRef } from '@angular/core';
export interface uiState {
    dialogOpen: boolean;
    /* tplTitle: TemplateRef<{}>;
    tplContent: TemplateRef<{}>;
    tplFooter: TemplateRef<{}>;
    modelRef: NzModalRef; */

}

export const initialState: uiState = {
    dialogOpen: false
    /* tplTitle: null,
    tplContent: null,
    tplFooter: null,
    modelRef: null */
}

const _uiReducer = createReducer(
    initialState,
    on(setFormularioModal, (state) => ({ ...state})),
    on(openFormularioModal, (state) => ({ ...state, dialogOpen: true })),
    on(closeFormularioModal, (state) => ({ ...state, dialogOpen: false}))
)

export function uiReducer(state, action) {
    return _uiReducer(state, action);
 }