import React from 'react';
import Box from '@mui/material/Box'
import DataRibbon from '@/components/Dashboard/DataRibbon';
import TransactionPerDay from '@/components/Dashboard/TransactionsPerDay/TransactionsPerDay';

const Dashboard = () => {
  return (
    <Box>
      {/** Data Ribbon - showing numerical stats */}
      <DataRibbon />
      {/** TransactionPerDay - graphic -numerical cards */}
      <TransactionPerDay />
      {/** Transaction Donut Charts Bottom Row - break down data into fractions */}
    </Box>
  );
};

export default Dashboard;
