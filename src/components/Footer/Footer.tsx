import React from 'react';
import scss from './Footer.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button, Paper, useTheme } from '@mui/material';
import Link from 'next/link';
import styled from '@emotion/styled';

const Footer = () => {
  const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;

  return (
    <footer className={scss.footer}>
      <Paper sx={{ width: '100%' }} color={'#262626'}>
        <ul role='menu'>
          <li>
            <FooterLink href={'/'}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/analytics'}>Analytics</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dahsboard/profile'}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/settings'}>Settings</FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/termsandconditions'}>
              Terms & Conditions
            </FooterLink>
          </li>
          <li>
            <FooterLink href={'/dashboard/accessibilitystatement'}>
              Accessibility Statement
            </FooterLink>
          </li>
          <li>
            <Button
              variant={'text'}
              color={session ? 'error' : 'success'}
              onClick={() => (session ? signOut : signIn)}
            >
              {session ? 'Sign Out' : 'Sign In'}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
};

export default Footer;
