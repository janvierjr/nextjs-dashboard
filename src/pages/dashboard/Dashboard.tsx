import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import scss from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={2} className={scss.topCardsContainer}>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
        <Grid xs={12} marginY={2}>
          <Paper className={scss.dataCard}>xs=8</Paper>
        </Grid>
    </Box>
  );
};

export default Dashboard;
