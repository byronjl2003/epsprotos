import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress',{static: false}) txtprogress : ElementRef;

  @Input() progreso:number = 50;
  @Input('nombre') leyenda: String = 'LEYENDA';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    //console.log('Leyenda',this.leyenda);
    //console.log('Progreso',this.progreso);
   }

  ngOnInit() {
  }

  cambiarValor(newval){
    //console.log(this.progreso);
    if(newval<0 && this.progreso <=0){
      return
    }
    if(newval>0 && this.progreso >=100){
      return
    }
    this.progreso += newval;
    this.cambioValor.emit(this.progreso);
    this.txtprogress.nativeElement.focus();
  }
  onChanges(newval:number){
    console.log(newval);
    if(!newval){
      this.progreso = 0;
    }
    else if(newval >=100){
      this.progreso = 100;
    }
    else if(newval <=0){
      this.progreso = 0;
    }
    else{
      this.progreso = newval;
    }
    this.txtprogress.nativeElement.value = newval;
    this.cambioValor.emit(this.progreso);


    //let elemHTML = document.getElementsByName('progreso');
    


    
    //this.cambiarValor(newval);
    

  }

}
