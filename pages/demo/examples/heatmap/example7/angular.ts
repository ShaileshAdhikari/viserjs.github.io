import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const axis1Opts = {
  dataKey: 'x',
  grid: {
    lineStyle: {
      stroke: '#d9d9d9',
      lineWidth: 1,
      lineDash: [ 2, 2 ]
    }
  }
};
const seriesOpts = {
  quickType: 'polygon',
  color: ['count', '#BAE7FF-#1890FF-#0050B3'],
  position: 'x*y',
  style: {
    lineWidth: 1,
    stroke: '#fff'
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-legend [offset]="40"></v-legend>
      <v-axis [dataKey]="axis1Opts.dataKey" [grid]="axis1Opts.grid"></v-axis>
      <v-tooltip showTitle="false" crosshairs="false"></v-tooltip>
      <v-polygon [position]="seriesOpts.position" [color]="seriesOpts.color" [style]="seriesOpts.style"></v-polygon>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = [];
  axis1Opts = axis1Opts;
  seriesOpts = seriesOpts;

  constructor() {
    $.getJSON('/assets/data/heatmap-7.json', (sourceData) => {
      const ds = new DataSet({
        state: {
          sizeEncoding: false
        }
      });
      const dv = ds.createView().source(sourceData);
      dv.transform({
        sizeByCount: '$state.sizeEncoding',
        type: 'bin.hexagon',
        fields: ['x', 'y'],
        bins: [10, 5],
      });
      this.data = dv.rows;
    });
  }
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

