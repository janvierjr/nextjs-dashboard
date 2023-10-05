import React from 'react';
import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import Login from '@/components/Login/Login'

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>{session ? 'Thanks for logging in' : 'Please log in'}</h2><br />
      <Login />
    </Box>
  )
}

export default SignIn;