import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { interval } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    
    let promesa = this.contarTres();

    promesa.then(
      mensaje => console.log('Termino',mensaje)
    ).catch(error => console.log("ERROR en la promesa!",error))

   }

  ngOnInit() {
  }
  contarTres(){
    return new Promise((resolve,reject)=> {
      let contador = 0;
      let intervalo = setInterval(()=>{
       contador += 1;
       console.log(contador);
       if (contador === 3){
         resolve("yeiiiii");
         clearInterval(intervalo)
       }
 
      },1000); 
     });
  }

}
