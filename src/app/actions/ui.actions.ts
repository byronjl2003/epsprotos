// [SOURCE] EVENT
import { createAction, props } from '@ngrx/store';
import { TemplateRef } from '@angular/core';
import { NzModalRef} from 'ng-zorro-antd/modal';
export const setFormularioModal = createAction(
    '[FormularioPage] Set Formulario Modal'
);

export const openFormularioModal = createAction(
    '[FormularioPage] Open Formulario Modal'
);
export const openFormularioClimaModal = createAction(
    '[FormularioPage] Open Formulario Clima Modal'
);
export const saludarConStore = createAction(
    '[FormularioPage] Saludar con la Store'
);

export const closeFormularioModal = createAction(
    '[FormularioPage] Close Formulario Modal'
);
export const closeFormularioClimaModal = createAction(
    '[FormularioPage] Close Formulario Clima Modal'
);

export const openVistaPreviaModal = createAction(
    '[FormularioPage] Open Vista Previa Modal'
);
export const closeVistaPreviaModal = createAction(
    '[FormularioPage] Close Vista Previa Modal'
);
export const showOkMessage = createAction(
    '[Pages] Show Ok Message',
    props<{msg: string}>()
);

export const showErrorMessage = createAction(
    '[Pages] Show Error Message',
    props<{msg: string}>()
);