import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _ajustes:SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema:string, link:any){

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }
  
  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for(let selec of selectores ){
      selec.classList.remove('working');
    }
    
    link.classList.add('working');
  }
  colocarCheck(){
    //console.log("ENTRO A colocarCheck")
    let selectores: any = document.getElementsByClassName('selector');
    //console.log(selectores);
    //console.log(selectores.length);
    let tema = this._ajustes.ajustes.tema;
    for(let selec of selectores ){
      //console.log(selec.getAttribute('data-theme'),tema);
      if(selec.getAttribute('data-theme') === tema){
        //console.log("LO ENCONTRO!")
        selec.classList.add('working');
        break;
      }
    }
  }
  
}
