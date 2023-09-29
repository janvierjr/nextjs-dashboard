import React, {createContext, useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery('(min-width: 500px)');

  const { ColorModeContext = createContext({ toggleColorMode: () => {} }) } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      {mobileCheck && <Typography sx={{ fontSize: '.75rem',  textTransform: 'uppercase'}}>{theme.palette.mode} mode</Typography>}
      <IconButton
        sx={{ mr: 2 }}
        title={`${theme.palette.mode} mode`}
        aria-label={`${theme.palette.mode} mode button`}
        onClick={colorMode.toggleColorMode}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
}

export default ThemeToggleButton;
