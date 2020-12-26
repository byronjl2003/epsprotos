import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-vistaprevia',
  templateUrl: './vistaprevia.component.html',
  styleUrls: ['./vistaprevia.component.css']
})
export class VistapreviaComponent implements OnInit, OnDestroy {

  name: string = '';
  constructor(private route: ActivatedRoute,) { }
  ngOnDestroy(): void {
    const data = localStorage.getItem('previa');
    if (data != null) {
      localStorage.removeItem('previa');
    }
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
  }

}
