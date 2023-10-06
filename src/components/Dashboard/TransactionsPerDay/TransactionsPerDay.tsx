import React from 'react';
import scss from './TransactionsPerDay.module.scss';
import { Card, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import DataChart from '@/components/DataChart';
import { lineChartData } from '@/components/mockData';

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
}


export type TransactionPerDayProps = {
  data?: TransactionCardType;
}

const TransactionPerDay = (props: TransactionPerDayProps) => {
  const { data } = props;
  const theme = useTheme();

  return (
    <Grid container gap={3} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          {/** CHART GOES HERE */}
          <DataChart type={'line'} data={lineChartData} />
        </div>
        <div className={scss.cardWrapper}>
          <Card className={scss.card} variant={'outlined'}>
            <div className={scss.cardTitle}>
              <Typography>Total Products</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}> 428.7%</Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={'outlined'}>
            <div className={scss.cardTitle}>
              <Typography>Buy-to-details</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>4.49%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}> 889.7%</Typography>
            </div>
          </Card>
          <Card className={scss.card} variant={'outlined'}>
            <div className={scss.cardTitle}>
              <Typography>Refunds</Typography>
            </div>
            <div className={scss.cardValue}>
              <Typography>15.6</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}> 3.7%</Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  )
}

export default TransactionPerDay;