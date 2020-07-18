import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

import { Chart } from 'chart.js';

import { BaseChartComponent } from '../basechart/basechart.component';
import { ChartDataService, ChartDataDouble } from 'src/app/service/chartdata.service';

@Component({
  selector: 'app-chartbardouble',
  templateUrl: './chartbardouble.component.html',
  styleUrls: ['./chartbardouble.component.css']
})
export class ChartBarDoubleComponent extends BaseChartComponent implements OnInit, OnDestroy {
  @ViewChild('canvasRef', { read: ElementRef, static: true }) canvasRef;
  @Input() typechart: string;
  selectedtypechart: string;
  currentdataset: string;
  mychart: any;
  chartdata: ChartDataDouble;
  minScale = 0;
  maxScale = 100;
  color = [];

  constructor(private dialog: MatDialog, private service: ChartDataService) {
    super(dialog);
    this.typechart = 'horizontalBar';
  }

  ngOnInit() {
    this.currentdataset = 'dataset1';
    this.chartdata = this.service.getChartDataDouble();
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
    const temp1 = [ ...this.mychart.data.datasets[0].data ];
    this.mychart.data.datasets[0].data = temp1.reverse();
    const temp2 = [ ...this.mychart.data.datasets[1].data ];
    this.mychart.data.datasets[1].data = temp2.reverse();
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
          label: 'Left dataset',
          backgroundColor: this.service.getBackgroundColor(length),
          borderColor: this.service.getBorderColor(length),
          borderWidth: 2,
          data: data.yValues1
        },
        {
          label: 'Right dataset',
          backgroundColor: this.service.getBackgroundColor(length),
          borderColor: this.service.getBorderColor(length),
          borderWidth: 2,
          data: data.yValues2
        },
      ]
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
