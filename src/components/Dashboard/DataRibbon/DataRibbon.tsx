import React from 'react';
import Grid from '@mui/material/Grid';
import DataCard from '../DataCard';
import scss from './DataRibbon.module.scss';

const DataRibbon = () => {
  return (
    <Grid container gap={3} className={scss.dataRibbon}>
      <DataCard
        title={'Total Sales'}
        value={'564'}
        description={
          'The totals of all DashData products in the current financial year'
        }
      />
      <Grid>
        <DataCard
          title={'Total Value'}
          value={'$25,987.59'}
          description={'Total sales of the current financial year'}
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Avg. Order Value'}
          value={'$158.90'}
          description={
            'The average order value of all sales this current financial year'
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Conversion rate'}
          value={'.59%'}
          description={'Number of leads become sales'}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
