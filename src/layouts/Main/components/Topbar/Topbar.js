import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { NavItem } from './components';
import TryFreeButton from 'components/cta/TryFreeButton';
import { useRouter } from 'next/router';

import SingleNavItem from './components/NavItem/SingleNavItem.js';
const Topbar = ({ onSidebarOpen, customRouting, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  //check if page is from ppc
  const isPpcPage = router.asPath === '/ppc/digital-experience-platform/';

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Zesty.io Platform"
        width={{ xs: 100, md: 150 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/assets/zesty-logo.png'
              : '/assets/zesty-logo-inverted.png'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: isPpcPage ? 'none' : 'flex' } }}
        alignItems={'center'}
      >
        {customRouting.map((route) => (
          <Box key={route.zuid}>
            {route.parentZUID == null && route.children.length > 0 && (
              <Box marginLeft={4}>
                <NavItem
                  title={route.title}
                  id={route.zuid}
                  items={route.children}
                  colorInvert={colorInvert}
                />
              </Box>
            )}
            {route.parentZUID == null && route.children.length == 0 && (
              <Box marginLeft={4}>
                <SingleNavItem
                  title={route.title}
                  id={route.zuid}
                  url={route.url}
                  colorInvert={colorInvert}
                />
              </Box>
            )}
          </Box>
        ))}

        <Box marginLeft={4}>
          <TryFreeButton variant="contained" component="a" />
        </Box>
        <Box marginLeft={2}>
          <Button
            size={'medium'}
            variant="text"
            color="primary"
            sx={{ fontWeight: 'bold' }}
            endIcon={<LoginIcon />}
            fullWidth
            component="a"
            href="https://accounts.zesty.io"
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default Topbar;
