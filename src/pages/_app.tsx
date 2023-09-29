import React, { createContext, useContext, useState, useMemo } from 'react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
/* css reset via mui and theme*/
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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

    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode]
    );

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
              }}
            >
              {theme.palette.mode} mode
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color='inherit'
              >
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Box>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };

export default App;
