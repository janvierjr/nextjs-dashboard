import * as React from 'react';
import { useTheme, Theme, CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import scss from '@/components/Sidebar/Sidebar.module.scss'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Person2Icon from '@mui/icons-material/Person2'
import Settings from '@mui/icons-material/Settings'
import ExitToApp from '@mui/icons-material/ExitToApp';
import NextLink from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react';


export type SidebarProps = {
  /** to be added */
};

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Sidebar = () => {
  const { data: session } = useSession();
  const mobileCheck = useMediaQuery('(min-width: 600px)');
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuRouteList = ['analytics', 'profile', 'settings', ''];
  const menuListTranslations = ['Data', 'Profile', 'Settings', 'Sign Out'];
  const menuListIcons = [
    <AnalyticsIcon />,
    <Person2Icon />,
    <Settings />,
    <ExitToApp />,
  ];

  const handleListItemButtonClick = (text: string) => {
    text === 'Sign Out' ? signOut() : null;
    setOpen(false);
  };

  return (
    <>
      <Drawer
        variant='permanent'
        anchor='left'
        open={open}
        className={scss.Sidebar}
        sx={{
          width: drawerWidth,
          ['& .MuiDrawer-paper']: {
            left: 0,
            top: mobileCheck ? 64 : 57,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
              ...openedMixin(theme),
              '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
              ...closedMixin(theme),
              '& .MuiDrawer-paper': closedMixin(theme),
            }),
          },
        }}
      >
        <div className={`${scss.drawerHeader}`}>
          <IconButton onClick={handleDrawerToggle}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuListTranslations.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <NextLink
                className={scss.link}
                href={`/dashboard/${menuRouteList[index]}`}
              >
                <ListItemButton
                  onClick={() => handleListItemButtonClick(text)}
                  title={text}
                  aria-label={text}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {menuListIcons[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: theme.palette.text.primary,
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
