import { Injectable, TemplateRef } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({providedIn: 'root'})
export class ModalinteractionService {
  private _modalStateSource = new Subject<boolean>();
  private _modalUIStateSource = new Subject<TemplateRef<{}>[]>();
  private _modalUIClimaStateSource = new Subject<TemplateRef<{}>[]>();
  modalState$ = this._modalStateSource.asObservable();
  modalUIState$ = this._modalUIStateSource.asObservable();
  modalUIClimaState$ = this._modalUIClimaStateSource.asObservable();
  constructor() { }

  changeEstate(state: boolean) {
    this._modalStateSource.next(state);
  }
  changeUIState(templates: TemplateRef<{}>[]) {
    this._modalUIStateSource.next(templates);
  }

  changeUIClimaState(templates: TemplateRef<{}>[]) {
    this._modalUIClimaStateSource.next(templates);
  }
  
}
