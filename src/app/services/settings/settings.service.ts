import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes={
    temaUrl:'assets/css/colors/default.css',
    tema:'default'
  };

  constructor(@Inject(DOCUMENT) private _document) { this.cargarAjustes();}

  guardarAjustes(){
    //console.log('Guardando en el localStorage');
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }
  cargarAjustes(){
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      //console.log("Cargando del localStorage");
      this.aplicarTema(this.ajustes.tema);
    }
    else{
      //console.log('Usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }
  aplicarTema(tema:string){
    //console.log("APLICANDO TEMA");
    let url = `assets/css/colors/${tema}.css`;
    //console.log(url);
    this._document.getElementById('tema').setAttribute('href',url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
    //this.colocarCheck();    

  }
  /*
  colocarCheck(){
    console.log("ENTRO A colocarCheck")
    let selectores: any = document.getElementsByClassName('selector');
    console.log(selectores);
    console.log(selectores.length);
    let tema = this.ajustes.tema;
    for(let selec of selectores ){
      console.log(selec.getAttribute('data-theme'),tema);
      selec.classList.remove('working');
    }
    console.log("--------------");
    for(let selec of selectores ){
      console.log(selec.getAttribute('data-theme'),tema);
      if(selec.getAttribute('data-theme') === tema){
        console.log("LO ENCONTRO!")
        selec.classList.add('working');
        break;
      }
    }
    
    

  }
  */

}

interface Ajustes{
  temaUrl: string;
  tema: string;
}
