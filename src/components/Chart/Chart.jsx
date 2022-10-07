import React, { useMemo } from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const { dataPoints } = props;

  const dataPointValues = useMemo(
    () => dataPoints.map((dataPoint) => dataPoint.value),
    [],
  );
  const totalMaximum = useMemo(() => Math.max(...dataPointValues), []);
  // const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  // const totalMaximum = Math.max(...dataPointValues);

  // console.log(dataPointValues, 'dataPointValues');
  // console.log(totalMaximum);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
