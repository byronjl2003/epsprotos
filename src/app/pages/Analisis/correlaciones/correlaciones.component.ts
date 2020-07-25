import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-correlaciones',
  templateUrl: './correlaciones.component.html',
  styleUrls: ['./correlaciones.component.css']
})
export class CorrelacionesComponent implements OnInit, AfterViewInit,
                                               OnDestroy {
  private chart: am4charts.XYChart;
  private chart2: am4charts.XYChart;
  private chart3: am4charts.XYChart;
  constructor(private zone: NgZone) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('chartdiv', am4charts.XYChart);
      let chart2 = am4core.create('chartdiv2', am4charts.XYChart);
      let chart3 = am4core.create('chartdiv3', am4charts.XYChart);
      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits +=
            Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push(
            {date: new Date(2018, 0, i), name: 'name' + i, value: visits});
      }

      chart.data = data;
      chart2.data = data;
      chart3.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      let dateAxis2 = chart2.xAxes.push(new am4charts.DateAxis());
      dateAxis2.renderer.grid.template.location = 0;
      let dateAxis3 = chart3.xAxes.push(new am4charts.DateAxis());
      dateAxis3.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;
      let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.tooltip.disabled = true;
      valueAxis2.renderer.minWidth = 35;
      let valueAxis3 = chart3.yAxes.push(new am4charts.ValueAxis());
      valueAxis3.tooltip.disabled = true;
      valueAxis3.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'date';
      series.dataFields.valueY = 'value';
      let series2 = chart2.series.push(new am4charts.LineSeries());
      series2.dataFields.dateX = 'date';
      series2.dataFields.valueY = 'value';
      let series3 = chart3.series.push(new am4charts.LineSeries());
      series3.dataFields.dateX = 'date';
      series3.dataFields.valueY = 'value';


      series.tooltipText = '{valueY.value}';
      chart.cursor = new am4charts.XYCursor();
      series2.tooltipText = '{valueY.value}';
      chart2.cursor = new am4charts.XYCursor();
      series3.tooltipText = '{valueY.value}';
      chart3.cursor = new am4charts.XYCursor();


      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      let scrollbarX2 = new am4charts.XYChartScrollbar();
      scrollbarX2.series.push(series2);
      chart2.scrollbarX = scrollbarX2;

      let scrollbarX3 = new am4charts.XYChartScrollbar();
      scrollbarX3.series.push(series3);
      chart3.scrollbarX = scrollbarX3;


      // ... chart code goes here ...

      this.chart = chart;
      this.chart2 = chart2;
      this.chart3 = chart3;
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
