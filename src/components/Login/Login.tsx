import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@mui/material/Button';
const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Button variant='contained' color='error' onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please Log in</h2> <br />
      <Button variant='contained' color='primary' onClick={() => signIn()}>
        Login
      </Button>
    </>
  )
};

export default Login;
