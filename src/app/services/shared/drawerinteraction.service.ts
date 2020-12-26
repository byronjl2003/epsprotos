import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DrawerinteractionService {
  private _drawerStateSource = new Subject<boolean>();
  modalState$ = this._drawerStateSource.asObservable();
  constructor() {}

  changeEstate(state: boolean) {
    this._drawerStateSource.next(state);
  }
}
