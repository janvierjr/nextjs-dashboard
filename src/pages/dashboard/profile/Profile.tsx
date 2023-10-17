import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useSession } from 'next-auth/react';
// get names from user session

const Profile = () => {
  const { data: session } = useSession();
  const names = session?.user?.name ? session?.user?.name.split(' ') : '';
  const firstName = names.length > 1 ? names[0] : '';
  const lastName = names.length > 1 ? names[1] : '';
  const emailAddress = session?.user?.email;

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email: emailAddress,
    password: '',
    confirmedPassword: '',
    receiveEmails: false,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleFormChange = (event: any) => {
    const { name, value, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  return (
    <>
      <h1>Profile</h1>
      <Box>
        <Typography variant={'h5'} sx={{ paddingBottom: 4 }}>
          Hey {session ? session?.user?.name : 'User'}, Welcome to your DashData
          profile. 👋
        </Typography>
        <Paper sx={{ padding: '2rem 2rem' }}>
          <Grid item xs={12} sm={8} md={6}>
            <Box display='flex' flexDirection={'column'} alignItems={'center'}>
              <Avatar
                sx={{
                  height: 100,
                  width: 100,
                  marginBottom: 2,
                }}
                src={session?.user?.image as string}
              />
            </Box>
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: 600, margin: '0 auto' }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type='text'
                    label='First Name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type='text'
                    label='Last Name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type='email'
                    label='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type='password'
                    label='Password'
                    name='password'
                    value={formData.password}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type='password'
                    label='Confirmed Password'
                    name='confirmedPassword'
                    value={formData.confirmedPassword}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='receiveEmails'
                        checked={formData.receiveEmails}
                        onChange={handleFormChange}
                        color='primary'
                      />
                    }
                    label='Receive Analytics Emails'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' color='primary'>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
