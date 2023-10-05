import React from 'react'
import Grid from '@mui/material/Grid';
import DataCard from '../DataCard';

const DataRibbon = () => {
  return (
    <Grid container gap={2}>
      <DataCard
        title={'Total Sales'}
        value={'564'}
        description={'The totals of all DashData products in the current financial year'}
        />
      <Grid>
        <DataCard
        title={'Total Sales'}
        value={'564'}
        description={'The totals of all DashData products in the current financial year'}
        />
      </Grid>
      <Grid>
        <DataCard
        title={'Total Sales'}
        value={'564'}
        description={'The totals of all DashData products in the current financial year'}
        />
      </Grid>
      <Grid>
        <DataCard
        title={'Total Sales'}
        value={'564'}
        description={'The totals of all DashData products in the current financial year'}
        />
      </Grid>
    </Grid>
  )
}

export default DataRibbon;