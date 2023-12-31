import React, { createContext, useState, useMemo } from 'react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';
import Header from '@/components/Header';
import Layout from '@/components/Layout/Layout';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {

    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      []
    );

    const darkThemeChosen = useMemo(
      () =>
        createTheme({
            ...darkTheme,
        }),
      [mode]
    );

    const lightThemeChosen = useMemo(
      () =>
        createTheme({
            ...lightTheme,
        }),
      [mode]
    );

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
          <SessionProvider session={session}>
            <CssBaseline />
            <Header ColorModeContext={ColorModeContext} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };

export default App;
