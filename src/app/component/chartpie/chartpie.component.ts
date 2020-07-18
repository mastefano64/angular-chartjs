import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Chart } from 'chart.js';

import { BaseChartComponent } from '../basechart/basechart.component';
import { ChartDataService, ChartDataSimple } from 'src/app/service/chartdata.service';

@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css']
})
export class ChartPieComponent extends BaseChartComponent implements OnInit, OnDestroy {
  @ViewChild('canvasRef', { read: ElementRef, static: true }) canvasRef;
  @Input() typechart: string;
  mychart: any;
  minScale = 0;
  maxScale = 10;
  color = [];

  constructor(private dialog: MatDialog, private service: ChartDataService) {
    super(dialog);
    this.typechart = 'pie';
  }

  ngOnInit() {
    const data = this.service.getChartDataSimple();
    this.mychart = this.createCharts(this.typechart, data);
  }

  onSaveImaget() {
    this.onShowModalSearch(this.canvasRef);
  }

  createCharts(typechart: string, data: ChartDataSimple) {
    const ctx = this.canvasRef.nativeElement.getContext('2d');
    const length = data.xLabels.length;

    const mychart = new Chart(ctx, {
      type: typechart,
      data: {
        labels: data.xLabels,
        datasets: [{
          label: 'Dataset',
          backgroundColor: this.service.getBackgroundColor(length),
          borderColor: this.service.getBorderColor(length ),
          borderWidth: 2,
          data: data.yValues
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              // min: this.minScale,
              // max: this.maxScale,
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              min: this.minScale,
              max: this.maxScale,
              beginAtZero: true
            }
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
