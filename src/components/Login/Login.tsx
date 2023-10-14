import React, {useState, useEffect} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@mui/material/Button';

const Login = () => {
  const { data: session } = useSession();
  const [buttonAppear, setButtonAppear] = useState(false);

// delay login button to let data dashboard load
  const DelayButtonAppearance = () => {
    return setTimeout(() => (
      setButtonAppear(true)
    ), 400);
  }
  useEffect(() => {
    DelayButtonAppearance()
  }, [])

  if (!session) {
    return (
      <>
        {buttonAppear &&
          <Button variant='contained' color='success' onClick={() => signIn()}>
            Login
          </Button>
        }
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
