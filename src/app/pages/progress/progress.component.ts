import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1:number = 80;
  progreso2:number = 20;
  constructor() { }

  ngOnInit() {
  }

  cambioValor(){
    return
  }
 
}
