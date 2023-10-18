import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const Settings = () => {
  const [showRevenue, setShowRevenue] = useState(true);
  const [showProfit, setShowProfit] = useState(true);
  const [showOrders, setShowOrders] = useState(true);
  const [showCustomers, setShowCustomers] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log('Submit Saved Settings');
  };

  const handleShowRevenue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowRevenue(event.target.checked);
  };
  const handleShowProfit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowProfit(event.target.checked);
  };
  const handleShowOrders = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOrders(event.target.checked);
  };
  const handleShowCustomers = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowCustomers(event.target.checked);
  };

  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant={'h5'} gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component={'fieldset'}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRevenue}
                        onChange={handleShowRevenue}
                      ></Switch>
                    }
                    label='Revenue'
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showProfit}
                        onChange={handleShowProfit}
                      ></Switch>
                    }
                    label='Profit'
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showOrders}
                        onChange={handleShowOrders}
                      ></Switch>
                    }
                    label='Orders'
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showCustomers}
                        onChange={handleShowCustomers}
                      ></Switch>
                    }
                    label='Customers'
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary'>
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
