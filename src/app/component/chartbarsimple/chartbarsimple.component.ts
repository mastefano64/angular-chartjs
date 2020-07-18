import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

import { Chart } from 'chart.js';

import { BaseChartComponent } from '../basechart/basechart.component';
import { ChartDataService, ChartDataSimple } from 'src/app/service/chartdata.service';

@Component({
  selector: 'app-chartbarsimple',
  templateUrl: './chartbarsimple.component.html',
  styleUrls: ['./chartbarsimple.component.css']
})
export class ChartBarSimpleComponent extends BaseChartComponent implements OnInit, OnDestroy {
  @ViewChild('canvasRef', { read: ElementRef, static: true }) canvasRef;
  @Input() typechart: string;
  selectedtypechart: string;
  currentdataset: string;
  mychart: any;
  chartdata: ChartDataSimple;
  minScale = 0;
  maxScale = 10;
  color = [];

  constructor(private dialog: MatDialog, private service: ChartDataService) {
    super(dialog);
    this.typechart = 'horizontalBar';
  }

  ngOnInit() {
    this.currentdataset = 'dataset1';
    this.chartdata = this.service.getChartDataSimple();
    this.mychart = this.createCharts(this.typechart);
    this.selectedtypechart = this.typechart;
  }

  onChartChange(event: MatSelectChange) {
    const type = event.value;
    this.destroyChart();
    this.mychart = this.createCharts(type);
  }

  onLoadDataset(type: number) {
    if (type === 1) {
      this.currentdataset = 'dataset1';
    } else {
      this.currentdataset = 'dataset2';
    }
    const temp = [ ...this.mychart.data.datasets[0].data ];
    this.mychart.data.datasets[0].data = temp.reverse();
    this.mychart.update();
  }

  onSaveImaget() {
    this.onShowModalSearch(this.canvasRef);
  }

  createCharts(typechart: string) {
    const data = this.chartdata;
    const ctx = this.canvasRef.nativeElement.getContext('2d');
    const length = data.xLabels.length;

    const mychart = new Chart(ctx, {
      type: typechart,
      data: {
        labels: data.xLabels,
        datasets: [{
          label: 'Dataset',
          borderWidth: 2,
          backgroundColor: this.service.getBackgroundColor(length),
          borderColor: this.service.getBorderColor(length ),
          data: this.chartdata.yValues
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
