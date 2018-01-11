import { Chart, Facet, View, Tooltip, Legend, Axis, Bar, FacetView, Coord } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const scale = [{
  dataKey: 'mean',
  sync: true
}, {
  dataKey: 'cut',
  sync: true,
}];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'aggregate',
    fields: ['price'],
    operations: ['mean'],
    as: ['mean'],
    groupBy: ['cut']
  });

  return {
    data: dv,
    series: {
      quickType: 'bar',
      position: 'cut*mean',
      color: 'cut',
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit={true} height={600} data={data} scale={scale}>
          <Coord type="polar" />
          <Legend />
          <Tooltip />
          <Facet type="circle" fields={['clarity']} views={views}></Facet>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);