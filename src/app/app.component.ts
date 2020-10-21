import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsService } from './services/service.index';
import { Observable } from 'rxjs';
/* 2 */
/* interface AppState { 
  auth:number
} */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClimaLaboral';
  count$: Observable<number>;
  constructor(public _ajustes: SettingsService/* , public store: Store<AppState> */) {
    //this.count$ = store.select('auth');
  }
 /*  increment() {
    console.log("increment");
    this.store.dispatch(increment());
  }
 
  decrement() {
    console.log("decrement");
    this.store.dispatch(decrement());
  }
 
  reset() {
    console.log("reset");
    this.store.dispatch(reset());
  } */
}
