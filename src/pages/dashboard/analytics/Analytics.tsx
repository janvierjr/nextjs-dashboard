import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


const Analytics = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 25,
    maxColumns: 15,
    editable: true,
  });

  return (
    <>
      <h1>Analytics</h1>
      <p>
        Look at this amazing table of data and analytics. This could be a whole section of analytics that is available for your users to deep dive further into various numbers and statistics. Imagine the amazement. The data narrative could truly convey measurable impact... clarity. Branded for consistency with your organization. Now that would demonstrate impact.
      </p>
      <div style={{ height: '600px', width: '100%'}}>
        <DataGrid {...data} />
      </div>
    </>
  );
};

export default Analytics;
