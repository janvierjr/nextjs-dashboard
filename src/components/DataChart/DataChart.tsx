import React, {useRef, useEffect} from 'react';
import { Chart, registerables, ChartConfiguration} from 'chart.js';
import { lightOptions } from '@/components/DataChart/Themes';
import { months } from '@/helper/Utils';

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef(null);
  const labels = months({ count: 7 });

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...lightOptions,
        },
      });
      return () => chart.destroy();
    }
  }, [data, options, props])

  return (
    <canvas ref={chartRef} />
  )
};
Chart.register(...registerables);

export default DataChart;