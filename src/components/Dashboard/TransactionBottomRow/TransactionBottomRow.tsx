import React from 'react';
import scss from './TransactionBottomRow.module.scss';
import { Grid, Paper } from '@mui/material';
import DataChart from '@/components/DataChart';
import {
  doughnutChartData1,
  doughnutChartData2,
  doughnutChartData3,
  doughnutChartData4
} from '@/components/mockData';

const TransactionBottomRow = () => {
  return (
    <Grid className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData1} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per region</p>
          <DataChart type={'doughnut'} data={doughnutChartData2} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user age</p>
          <DataChart type={'doughnut'} data={doughnutChartData3} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user income</p>
          <DataChart type={'doughnut'} data={doughnutChartData4} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default TransactionBottomRow;