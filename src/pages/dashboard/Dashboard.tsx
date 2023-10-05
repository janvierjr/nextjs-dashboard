import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import scss from './Dashboard.module.scss';
import DataRibbon from '@/components/Dashboard/DataRibbon';
import DataCard from '@/components/Dashboard/DataCard';

const Dashboard = () => {
  return (
    <Box>
      {/** Data Ribbon - showing numerical stats */}
      {/** TransactionPerDay - graphic -numerical cards */}
      {/** Transaction Donut Charts Bottom Row - break down data into fractions */}
        <DataRibbon />
    </Box>
  );
};

export default Dashboard;
