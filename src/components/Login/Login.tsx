import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@mui/material/Button';

const Login = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
          <Button variant='contained' color='success' onClick={() => signIn()}>
            Login
          </Button>
      </>
    );
  }
  return (
      <>
        <Button variant='contained' color='error' onClick={() => signOut()}>
          Sign out
        </Button>
        <p>Signed in as {session?.user?.email}</p>
      </>
  )
};

export default Login;
