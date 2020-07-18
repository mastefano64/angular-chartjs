import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  private chartdatasimple: ChartDataSimple;
  private chartdatadouble: ChartDataDouble;
  private chartdatastacked: ChartDataStacked[];
  private color1 = [];
  private color2 = [];

  constructor() {
    this.createTabColor1();
    this.createTabColor2();
    this.createChartDataSimple();
    this.createChartDataDouble();
    this.createChartDataStacked();
  }

  getChartDataSimple(): ChartDataSimple {
    return this.chartdatasimple;
  }

  getChartDataDouble(): ChartDataDouble {
    return this.chartdatadouble;
  }

  getChartDataStacked(): ChartDataStacked[] {
    return this.chartdatastacked;
  }

  getBorderColor(length: number) {
    const list = [];
    for (let i = 0; i < length; i++) {
      const c = this.color1[i];
      list.push(`rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`);
    }
    return list;
  }

  getBackgroundColor(length: number) {
    const list = [];
    for (let i = 0; i < length; i++) {
      const c = this.color2[i];
      list.push(`rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`);
    }
    return list;
  }

  private createChartDataSimple() {
    const data = new ChartDataSimple();

    data.xLabels.push('Administration');
    data.yValues.push(6);

    data.xLabels.push('Acconting');
    data.yValues.push(9);

    data.xLabels.push('Human Resource');
    data.yValues.push(3);

    data.xLabels.push('Logistics');
    data.yValues.push(4);

    data.xLabels.push('Marketing');
    data.yValues.push(8);

    data.xLabels.push('Research and Development');
    data.yValues.push(7);

    data.xLabels.push('Support');
    data.yValues.push(3);

    data.xLabels.push('Technology');
    data.yValues.push(4);

    this.chartdatasimple = data;
  }

  private createChartDataDouble() {
    const data = new ChartDataDouble();

    data.xLabels.push('a1');
    data.yValues1.push(10);
    data.yValues2.push(55);

    data.xLabels.push('a2');
    data.yValues1.push(20);
    data.yValues2.push(100);

    data.xLabels.push('a3');
    data.yValues1.push(55);
    data.yValues2.push(20);

    data.xLabels.push('a4');
    data.yValues1.push(30);
    data.yValues2.push(70);

    data.xLabels.push('a5');
    data.yValues1.push(10);
    data.yValues2.push(50);

    this.chartdatadouble = data;
  }

  private createChartDataStacked() {
    this.chartdatastacked = [];

    const data1 = new ChartDataStacked();
    data1.xLabels = 'Tv';
    data1.backgroundColor = this.getColorItem1(0);
    data1.borderColor = this.getColorItem2(0);
    data1.yValues = [ 5, 10 , 15 ];
    this.chartdatastacked.push(data1);

    const data2 = new ChartDataStacked();
    data2.xLabels = 'Game';
    data2.backgroundColor = this.getColorItem1(1);
    data2.borderColor = this.getColorItem2(1);
    data2.yValues = [ 10, 15 , 20 ];
    this.chartdatastacked.push(data2);

    const data3 = new ChartDataStacked();
    data3.xLabels = 'Book';
    data3.backgroundColor = this.getColorItem1(2);
    data3.borderColor = this.getColorItem2(2);
    data3.yValues = [ 15, 20 , 25 ];
    this.chartdatastacked.push(data3);
  }

  private createTabColor1() {
    this.color1.push({ r: 255, g: 0, b: 0, a: 0.6 });
    this.color1.push({ r: 128, g: 0, b: 0, a: 0.6 });
    this.color1.push({ r: 255, g: 255, b: 0, a: 0.6  });
    this.color1.push({ r: 128, g: 128, b: 0, a: 0.6  });
    this.color1.push({ r: 0, g: 255, b: 0, a: 0.6  });
    this.color1.push({ r: 0, g: 128, b: 0, a: 0.6  });
    this.color1.push({ r: 0, g: 255, b: 255, a: 0.6  });
    this.color1.push({ r: 0, g: 0, b: 255, a: 0.6 });
    this.color1.push({ r: 0, g: 0, b: 128, a: 0.6  });
    this.color1.push({ r: 255, g: 0, b: 255, a: 0.6  });
    this.color1.push({ r: 128, g: 0, b: 128, a: 0.6  });
    this.color1.push({ r: 128, g: 128, b: 128, a: 0.6  });
    this.color1.push({ r: 87, g: 104, b: 174, a: 0.6  });
    this.color1.push({ r: 125, g: 78, b: 159, a: 0.6  });
    this.color1.push({ r: 187, g: 57, b: 101, a: 0.6  });
    this.color1.push({ r: 204, g: 153, b: 255, a: 0.6  });
    this.color1.push({ r: 3, g: 113, b: 113, a: 0.6  });
    this.color1.push({ r: 0, g: 185, b: 174, a: 0.6  });
    this.color1.push({ r: 188, g: 248, b: 236, a: 0.6  });
    this.color1.push({ r: 184, g: 224, b: 210, a: 0.6  });
    this.color1.push({ r: 170, g: 170, b: 170, a: 0.6  });
  }

  private createTabColor2() {
    this.color2.push({ r: 255, g: 0, b: 0, a: 0.6 });
    this.color2.push({ r: 128, g: 0, b: 0, a: 0.6 });
    this.color2.push({ r: 255, g: 255, b: 0, a: 0.6  });
    this.color2.push({ r: 128, g: 128, b: 0, a: 0.6  });
    this.color2.push({ r: 0, g: 255, b: 0, a: 0.6  });
    this.color2.push({ r: 0, g: 128, b: 0, a: 0.6  });
    this.color2.push({ r: 0, g: 255, b: 255, a: 0.6  });
    this.color2.push({ r: 0, g: 0, b: 255, a: 0.6 });
    this.color2.push({ r: 0, g: 0, b: 128, a: 0.6  });
    this.color2.push({ r: 255, g: 0, b: 255, a: 0.6  });
    this.color2.push({ r: 128, g: 0, b: 128, a: 0.6  });
    this.color2.push({ r: 128, g: 128, b: 128, a: 0.6  });
    this.color2.push({ r: 87, g: 104, b: 174, a: 0.6  });
    this.color2.push({ r: 125, g: 78, b: 159, a: 0.6  });
    this.color2.push({ r: 187, g: 57, b: 101, a: 0.6  });
    this.color2.push({ r: 204, g: 153, b: 255, a: 0.6  });
    this.color2.push({ r: 3, g: 113, b: 113, a: 0.6  });
    this.color2.push({ r: 0, g: 185, b: 174, a: 0.6  });
    this.color2.push({ r: 188, g: 248, b: 236, a: 0.6  });
    this.color2.push({ r: 184, g: 224, b: 210, a: 0.6  });
    this.color2.push({ r: 170, g: 170, b: 170, a: 0.6  });
  }

  private getColorItem1(i: number) {
    const c = this.color1[i];
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
  }

  private getColorItem2(i: number) {
    const c = this.color2[i];
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
  }
}

export class ChartDataSimple {
  xLabels: string[] = [];
  yValues: number[] = [];
}

export class ChartDataDouble {
  xLabels: string[] = [];
  yValues1: number[] = [];
  yValues2: number[] = [];
}

export class ChartDataStacked {
  xLabels: string;
  yValues: number[] = [];
  backgroundColor: string;
  borderColor: string;
}
