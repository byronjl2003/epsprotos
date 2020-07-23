import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    

    this.regresaObservable().pipe(
      //retry(2) 
    ).subscribe(
      numero => console.log('Subs',numero),
      error => console.log("Error en obs",error),
      () => console.log('el observador termino!!!')
    );
   }

  ngOnInit() {
  }

  regresaObservable(): Observable<any>{
    return new Observable((observer: Subscriber<any>) =>{
      let contador = 0;
      let intervalo = setInterval(() =>{
        contador +=1;
        observer.next(contador);
        if(contador === 3){
          clearInterval(intervalo);
          observer.complete();
        }
      /*   if (contador === 2){
          //clearInterval(intervalo);
          observer.error("SHIET!")
        } */
        
      },1000);
    });

  }

}
