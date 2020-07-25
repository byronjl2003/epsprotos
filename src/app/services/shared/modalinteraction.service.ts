import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({providedIn: 'root'})
export class ModalinteractionService {
  private _modalStateSource = new Subject<boolean>();
  modalState$ = this._modalStateSource.asObservable();
  constructor() {}

  changeEstate(state: boolean) {
    this._modalStateSource.next(state);
  }
}
