"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
var DataSet = require('@antv/data-set');
var data = [
    { direction: 'N', level: '< 0.5 m/s', value: 1.81 },
    { direction: 'N', level: '0.5-2 m/s', value: 1.78 },
    { direction: 'N', level: '2-4 m/s', value: 0.16 },
    { direction: 'N', level: '4-6 m/s', value: 0.00 },
    { direction: 'N', level: '6-8 m/s', value: 0.00 },
    { direction: 'N', level: '8-10 m/s', value: 0.00 },
    { direction: 'N', level: '> 10 m/s', value: 0.00 },
    { direction: 'NNE', level: '< 0.5 m/s', value: 0.62 },
    { direction: 'NNE', level: '0.5-2 m/s', value: 1.09 },
    { direction: 'NNE', level: '2-4 m/s', value: 0.00 },
    { direction: 'NNE', level: '4-6 m/s', value: 0.00 },
    { direction: 'NNE', level: '6-8 m/s', value: 0.00 },
    { direction: 'NNE', level: '8-10 m/s', value: 0.00 },
    { direction: 'NNE', level: '> 10 m/s', value: 0.00 },
    { direction: 'NE', level: '< 0.5 m/s', value: 0.82 },
    { direction: 'NE', level: '0.5-2 m/s', value: 0.82 },
    { direction: 'NE', level: '2-4 m/s', value: 0.07 },
    { direction: 'NE', level: '4-6 m/s', value: 0.00 },
    { direction: 'NE', level: '6-8 m/s', value: 0.00 },
    { direction: 'NE', level: '8-10 m/s', value: 0.00 },
    { direction: 'NE', level: '> 10 m/s', value: 0.00 },
    { direction: 'ENE', level: '< 0.5 m/s', value: 0.59 },
    { direction: 'ENE', level: '0.5-2 m/s', value: 1.22 },
    { direction: 'ENE', level: '2-4 m/s', value: 0.07 },
    { direction: 'ENE', level: '4-6 m/s', value: 0.00 },
    { direction: 'ENE', level: '6-8 m/s', value: 0.00 },
    { direction: 'ENE', level: '8-10 m/s', value: 0.00 },
    { direction: 'ENE', level: '> 10 m/s', value: 0.00 },
    { direction: 'E', level: '< 0.5 m/s', value: 0.62 },
    { direction: 'E', level: '0.5-2 m/s', value: 2.20 },
    { direction: 'E', level: '2-4 m/s', value: 0.49 },
    { direction: 'E', level: '4-6 m/s', value: 0.00 },
    { direction: 'E', level: '6-8 m/s', value: 0.00 },
    { direction: 'E', level: '8-10 m/s', value: 0.00 },
    { direction: 'E', level: '> 10 m/s', value: 0.00 },
    { direction: 'ESE', level: '< 0.5 m/s', value: 1.22 },
    { direction: 'ESE', level: '0.5-2 m/s', value: 2.01 },
    { direction: 'ESE', level: '2-4 m/s', value: 1.55 },
    { direction: 'ESE', level: '4-6 m/s', value: 0.30 },
    { direction: 'ESE', level: '6-8 m/s', value: 0.13 },
    { direction: 'ESE', level: '8-10 m/s', value: 0.00 },
    { direction: 'ESE', level: '> 10 m/s', value: 0.00 },
    { direction: 'SE', level: '< 0.5 m/s', value: 1.61 },
    { direction: 'SE', level: '0.5-2 m/s', value: 3.06 },
    { direction: 'SE', level: '2-4 m/s', value: 2.37 },
    { direction: 'SE', level: '4-6 m/s', value: 2.14 },
    { direction: 'SE', level: '6-8 m/s', value: 1.74 },
    { direction: 'SE', level: '8-10 m/s', value: 0.39 },
    { direction: 'SE', level: '> 10 m/s', value: 0.13 },
    { direction: 'SSE', level: '< 0.5 m/s', value: 2.04 },
    { direction: 'SSE', level: '0.5-2 m/s', value: 3.42 },
    { direction: 'SSE', level: '2-4 m/s', value: 1.97 },
    { direction: 'SSE', level: '4-6 m/s', value: 0.86 },
    { direction: 'SSE', level: '6-8 m/s', value: 0.53 },
    { direction: 'SSE', level: '8-10 m/s', value: 0.49 },
    { direction: 'SSE', level: '> 10 m/s', value: 0.00 },
    { direction: 'S', level: '< 0.5 m/s', value: 2.66 },
    { direction: 'S', level: '0.5-2 m/s', value: 4.74 },
    { direction: 'S', level: '2-4 m/s', value: 0.64 },
    { direction: 'S', level: '4-6 m/s', value: 0.00 },
    { direction: 'S', level: '6-8 m/s', value: 0.00 },
    { direction: 'S', level: '8-10 m/s', value: 0.49 },
    { direction: 'S', level: '> 10 m/s', value: 0.00 },
    { direction: 'SSW', level: '< 0.5 m/s', value: 2.96 },
    { direction: 'SSW', level: '0.5-2 m/s', value: 4.23 },
    { direction: 'SSW', level: '2-4 m/s', value: 0.34 },
    { direction: 'SSW', level: '4-6 m/s', value: 1.03 },
    { direction: 'SSW', level: '6-8 m/s', value: 0.30 },
    { direction: 'SSW', level: '8-10 m/s', value: 0.00 },
    { direction: 'SSW', level: '> 10 m/s', value: 0.00 },
    { direction: 'SW', level: '< 0.5 m/s', value: 2.53 },
    { direction: 'SW', level: '0.5-2 m/s', value: 4.01 },
    { direction: 'SW', level: '2-4 m/s', value: 1.22 },
    { direction: 'SW', level: '4-6 m/s', value: 0.49 },
    { direction: 'SW', level: '6-8 m/s', value: 0.13 },
    { direction: 'SW', level: '8-10 m/s', value: 0.00 },
    { direction: 'SW', level: '> 10 m/s', value: 0.00 },
    { direction: 'WSW', level: '< 0.5 m/s', value: 1.97 },
    { direction: 'WSW', level: '0.5-2 m/s', value: 2.66 },
    { direction: 'WSW', level: '2-4 m/s', value: 1.97 },
    { direction: 'WSW', level: '4-6 m/s', value: 0.79 },
    { direction: 'WSW', level: '6-8 m/s', value: 0.30 },
    { direction: 'WSW', level: '8-10 m/s', value: 0.00 },
    { direction: 'WSW', level: '> 10 m/s', value: 0.00 },
    { direction: 'W', level: '< 0.5 m/s', value: 1.64 },
    { direction: 'W', level: '0.5-2 m/s', value: 1.71 },
    { direction: 'W', level: '2-4 m/s', value: 0.92 },
    { direction: 'W', level: '4-6 m/s', value: 1.45 },
    { direction: 'W', level: '6-8 m/s', value: 0.26 },
    { direction: 'W', level: '8-10 m/s', value: 0.10 },
    { direction: 'W', level: '> 10 m/s', value: 0.00 },
    { direction: 'WNW', level: '< 0.5 m/s', value: 1.32 },
    { direction: 'WNW', level: '0.5-2 m/s', value: 2.40 },
    { direction: 'WNW', level: '2-4 m/s', value: 0.99 },
    { direction: 'WNW', level: '4-6 m/s', value: 1.61 },
    { direction: 'WNW', level: '6-8 m/s', value: 0.33 },
    { direction: 'WNW', level: '8-10 m/s', value: 0.00 },
    { direction: 'WNW', level: '> 10 m/s', value: 0.00 },
    { direction: 'NW', level: '< 0.5 m/s', value: 1.58 },
    { direction: 'NW', level: '0.5-2 m/s', value: 4.28 },
    { direction: 'NW', level: '2-4 m/s', value: 1.28 },
    { direction: 'NW', level: '4-6 m/s', value: 0.76 },
    { direction: 'NW', level: '6-8 m/s', value: 0.66 },
    { direction: 'NW', level: '8-10 m/s', value: 0.69 },
    { direction: 'NW', level: '> 10 m/s', value: 0.03 },
    { direction: 'NNW', level: '< 0.5 m/s', value: 1.51 },
    { direction: 'NNW', level: '0.5-2 m/s', value: 5.00 },
    { direction: 'NNW', level: '2-4 m/s', value: 1.32 },
    { direction: 'NNW', level: '4-6 m/s', value: 0.13 },
    { direction: 'NNW', level: '6-8 m/s', value: 0.23 },
    { direction: 'NNW', level: '8-10 m/s', value: 0.13 },
    { direction: 'NNW', level: '> 10 m/s', value: 0.07 }
];
var colors = ['#E3F4BF', '#BEF7C8', '#86E6C8', '#36CFC9', '#209BDD', '#1581E6', '#0860BF'];
var legendOpt = {
    position: 'bottom',
    useHtml: true,
    offset: 30,
    itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}">' +
        '<div class="g2-legend-marker" style="background-color:{color};"></div>' +
        '<div class="g2-legend-text">{value}</div>'
        + '</li>',
    legendListItem: {
        width: '60px',
        textAlign: 'center',
        marginRight: 0
    },
    legendMarker: {
        width: '100%',
        height: '16px',
        borderRadius: 0,
        border: '1px solid #fff'
    }
};
var axisOpt = {
    label: {
        offset: 0,
        textStyle: {
            textAlign: 'center'
        }
    },
    tickLine: null,
    line: {
        stroke: '#E9E9E9',
        lineDash: [3, 3]
    },
    grid: {
        line: {
            lineDash: [0, 0]
        }
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.padding = [40, 100, 80];
        this.data = data;
        this.legendOpt = legendOpt;
        this.axisOpt = axisOpt;
        this.color = ['level', colors];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"padding\" [data]=\"data\">\n      <v-legend\n        [position]=\"legendOpt.position\"\n        [useHtml]=\"legendOpt.useHtml\"\n        [offset]=\"legendOpt.offset\"\n        [itemTpl]=\"legendOpt.itemTpl\"\n        [legendListItem]=\"legendOpt.legendListItem\"\n        [legendMarker]=\"legendOpt.legendMarker\"\n      ></v-legend>\n      <v-tooltip></v-tooltip>\n      <v-coord type=\"polar\" [radius]=\"0.85\"></v-coord>\n      <v-axis\n        dataKey=\"value\"\n        [label]=\"axisOpt.label\"\n        [tickLine]=\"axisOpt.tickLine\"\n        [line]=\"axisOpt.line\"\n        [grid]=\"axisOpt.grid\"\n      ></v-axis>\n      <v-stack-bar position=\"direction*value\" [color]=\"color\" size=\"35\"></v-stack-bar>\n    </v-chart>\n  </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                viser_ng_1.ViserModule
            ],
            providers: [],
            bootstrap: [
                AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=angular.js.map