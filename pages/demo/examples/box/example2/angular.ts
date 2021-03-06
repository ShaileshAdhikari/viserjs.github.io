import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const sourceData = [
  { x: '职业 A', low: 20000, q1: 26000, median: 27000, q3: 32000, high: 38000, outliers: [50000, 52000] },
  { x: '职业 B', low: 40000, q1: 49000, median: 62000, q3: 73000, high: 88000, outliers: [32000, 29000, 106000] },
  { x: '职业 C', low: 52000, q1: 59000, median: 65000, q3: 74000, high: 83000, outliers: [91000] },
  { x: '职业 D', low: 58000, q1: 96000, median: 130000, q3: 170000, high: 200000, outliers: [42000, 210000, 215000] },
  { x: '职业 E', low: 24000, q1: 28000, median: 32000, q3: 38000, high: 42000, outliers: [48000] },
  { x: '职业 F', low: 47000, q1: 56000, median: 69000, q3: 85000, high: 100000, outliers: [110000, 115000, 32000] },
  { x: '职业 G', low: 64000, q1: 74000, median: 83000, q3: 93000, high: 100000, outliers: [110000] },
  { x: '职业 H', low: 67000, q1: 72000, median: 84000, q3: 95000, high: 110000, outliers: [57000, 54000] }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'map',
  callback: (obj) => {
    obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
    return obj;
  }
});
const data = dv.rows;

const scale = [{
  dataKey: 'range',
  min: 0,
  max: 240000,
}, {
  dataKey: 'outliers',
  min: 0,
  max: 240000,
}];

const tooltipOpts = {
  showTitle: false,
  crosshairs: {
    type: 'rect'
  },
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
      + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
      + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
      + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
      + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
      + '</li>'
};

const boxStyle = {
  stroke: '#545454',
  fill: '#1890FF',
  fillOpacity: 0.3
};

const boxTooltip = ['x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
  return {
    name: x,
    low,
    q1,
    median,
    q3,
    high
  };
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height">
      <v-tooltip [showTitle]="tooltipOpts.showTitle" [crosshairs]="tooltipOpts.crosshairs" [itemTpl]="tooltipOpts.itemTpl"></v-tooltip>
      <v-view [data]="data" [scale]="scale">
        <v-tooltip></v-tooltip>
        <v-axis></v-axis>
        <v-box position="x*range" [style]="boxStyle" [tooltip]="boxTooltip"></v-box>
      </v-view>
      <v-view [data]="data" [scale]="scale">
        <v-tooltip></v-tooltip>
        <v-point position="x*outliers" [size]="3" [active]="false" shape="circle"></v-point>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  scale = scale;
  tooltipOpts = tooltipOpts;
  boxStyle = boxStyle;
  boxTooltip = boxTooltip;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

