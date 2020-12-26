import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') public doughnutChartLabels: Label[];
  @Input('data') public doughnutChartData: MultiDataSet;
  @Input('type') public doughnutChartType: ChartType ;
  @Input('leyenda') public leyenda:string = 'vacio';
   
 /*  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public leyenda:string = "valiendo";
  */
  constructor() {
    console.log(this.doughnutChartData);
    console.log(this.doughnutChartLabels);
    console.log(this.doughnutChartType);
    console.log(this.leyenda);

   }

  ngOnInit() {
  }

}
