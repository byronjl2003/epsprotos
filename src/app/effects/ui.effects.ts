import { Injectable, TemplateRef } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, mergeMap, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { showOkMessage, showErrorMessage } from '../actions/ui.actions';
import { openFormularioModal,openFormularioClimaModal, saludarConStore, closeFormularioModal,closeFormularioClimaModal} from '../actions/ui.actions';
import * as fromRoot from '../reducers';
import {ModalinteractionService} from 'src/app/services/service.index';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Injectable()
export class UiEffects {
    modalref: NzModalRef;
    modalclimaref: NzModalRef;
    modalestadisticosref: NzModalRef;
    tplTitle: TemplateRef<{}>;
    tplContent: TemplateRef<{}>;
    tplFooter: TemplateRef<{}>;
    tplTitleClima: TemplateRef<{}>;
    tplContentClima: TemplateRef<{}>;
    tplFooterClima: TemplateRef<{}>;
  
    constructor(
        private actions: Actions,
        private modal: NzModalService,
        private store: Store<fromRoot.appState>,
        public _modalservice: ModalinteractionService,
        private notification: NzNotificationService)
    {
        this._modalservice.modalUIState$.subscribe((templates) => {
            this.tplTitle = templates[0];
            this.tplContent = templates[1];
            this.tplFooter = templates[2];
        });

        this._modalservice.modalUIClimaState$.subscribe((templates) => {
            this.tplTitleClima = templates[0];
            this.tplContentClima = templates[1];
            this.tplFooterClima = templates[2];
        });
    }

    showOkMessage$ = createEffect(() =>
        this.actions.pipe(
            ofType(showOkMessage),
            mergeMap((action) => {
                console.log('ShowOKKK');
                this.notification.success('Todo Correcto', action.msg);
                return of();
            })
        ), { dispatch: false }
    );
    showErrorMessage$ = createEffect(() =>
        this.actions.pipe(
            ofType(showErrorMessage),
            mergeMap((action) => {
                console.log('ERRRRRR');
                this.notification.error('Ocurrio un Problema', action.msg);
                return of();
            })
        ), { dispatch: false }
    );
    saludarConStore$ = createEffect(() =>
        this.actions.pipe(
            ofType(saludarConStore),
            mergeMap((action) => {
                console.log("Efecti de saludar");
                return of(saludarConStore());
             })
        )
        
        , { dispatch: false });
    
    openModal$ = createEffect(() =>
        this.actions.pipe(
            ofType(openFormularioModal),
            mergeMap((action) => {
                console.log("Efecti de saludar");
                console.log("En el efecto openModal");
                this.modalref = this.modal.create({
                    nzTitle: this.tplTitle,
                    nzContent: this.tplContent,
                    nzFooter: this.tplFooter,
                    nzMaskClosable: false,
                    nzClosable: false,
                    nzWidth: 900,
                    nzComponentParams: {
                        value: 'Template Context'
                    },
                    nzOnOk: () => console.log('Click ok')
                });
                return of(saludarConStore());
             })
        )
        , { dispatch: false });
    
    openClimaModal$ = createEffect(() =>
        this.actions.pipe(
            ofType(openFormularioClimaModal),
            mergeMap((action) => {
                
                this.modalclimaref = this.modal.create({
                    nzTitle: this.tplTitleClima,
                    nzContent: this.tplContentClima,
                    nzFooter: this.tplFooterClima,
                    nzMaskClosable: false,
                    nzClosable: false,
                    nzWidth: 900,
                    nzComponentParams: {
                        value: 'Template Context'
                    },
                    nzOnOk: () => console.log('Click ok')
                });
                return of();
             })
        )
    ,{ dispatch: false });

    closeModal$ = createEffect(() =>
        this.actions.pipe(
            ofType(closeFormularioModal),
            mergeMap(action => {
                this.modalref.destroy();
                return of();
            })
        )
        , { dispatch: false });
    
    closeClimaModal$ = createEffect(() =>
        this.actions.pipe(
            ofType(closeFormularioClimaModal),
            mergeMap(action => {
                this.modalref.destroy();
                return of();
            })
        )
    ,{ dispatch: false });
    
    /* openModal$ = createEffect(() =>
        this.actions.pipe(
            ofType(openFormularioModal),
            withLatestFrom(this.store, (action, state) => ({ action: action, tplTitle: state.ui.tplTitle, tplContent: state.ui.tplContent, tplFooter: state.ui.tplFooter })),
            mergeMap(({ action, tplTitle, tplContent, tplFooter }) => {
                console.log("En el efecto openModal");
                this.modalref = this.modal.create({
                    nzTitle: tplTitle,
                    nzContent: tplContent,
                    nzFooter: tplFooter,
                    nzMaskClosable: false,
                    nzClosable: false,
                    nzComponentParams: {
                        value: 'Template Context'
                    },
                    nzOnOk: () => console.log('Click ok')
                });
                return of(openFormularioModal({ refmodal: this.modalref }));
            }
            )
        )

    ,{ dispatch: false }); */
}

/* mergeMap(action => {
                this.modalref = this.modal.create
                return of(openFormularioModal());
             }
            ) */