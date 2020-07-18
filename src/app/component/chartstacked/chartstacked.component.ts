import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Chart } from 'chart.js';

import { BaseChartComponent } from '../basechart/basechart.component';
import { ChartDataService, ChartDataStacked } from 'src/app/service/chartdata.service';

@Component({
  selector: 'app-chartstacked',
  templateUrl: './chartstacked.component.html',
  styleUrls: ['./chartstacked.component.css']
})
export class ChartStackedComponent extends BaseChartComponent implements OnInit, OnDestroy {
  @ViewChild('canvasRef', { read: ElementRef, static: true }) canvasRef;
  @Input() typechart: string;
  mychart: any;
  minScale = 0;
  maxScale = 100;
  color = [];

  constructor(private dialog: MatDialog, private service: ChartDataService) {
    super(dialog);
    this.typechart = 'bar';
  }

  ngOnInit() {
    const data = this.service.getChartDataStacked();
    this.mychart = this.createCharts(this.typechart, data);
  }

  onSaveImaget() {
    this.onShowModalSearch(this.canvasRef);
  }

  createCharts(typechart: string, data: ChartDataStacked[]) {
    const ctx = this.canvasRef.nativeElement.getContext('2d');

    const lb = [];
    for (const d1 of data) {
      lb.push(d1.xLabels);
    }

    const ds = [];
    for (const d1 of data) {
      const d2 = {
        label: d1.xLabels,
        borderColor: d1.borderColor,
        backgroundColor: d1.backgroundColor,
        data: d1.yValues
      };
      ds.push(d2);
    }

    const mychart = new Chart(ctx, {
      type: typechart,
      data: {
        labels: lb,
        datasets: ds
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              // min: this.minScale,
              // max: this.maxScale,
              beginAtZero: true
            },
            stacked: true,
          }],
          xAxes: [{
            ticks: {
              min: this.minScale,
              max: this.maxScale,
              beginAtZero: true
            },
            stacked: true,
          }]
        },
        animation: {
          onComplete: (e) => {
            // myChart.options.animation.onComplete = null;
            // basechart.saveChartImage(filenamechart, myChart.canvas);
            // console.log("onComplete: " + myChart.canvas.id);
          }
        }
      }
    });

    return mychart;
  }

  destroyChart() {
    if (this.mychart) {
      this.mychart.destroy();
    }
    const ele = this.canvasRef.nativeElement;
    // ele.empty();
  }

  ngOnDestroy() {
    this.destroyChart();
  }
}
