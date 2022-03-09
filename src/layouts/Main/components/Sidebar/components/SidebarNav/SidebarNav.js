import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import TryFreeButton from 'components/cta/TryFreeButton';

const SidebarNav = ({ customRouting }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/assets/zesty-logo.png'
                : '/assets/zesty-logo-inverted.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
      {customRouting.map(route => (
           <Box>
            {route.parentZUID == null && route.children.length > 0 &&
             
                <NavItem
                  title={route.title}
                  id={route.zuid}
                  items={route.children}
                />
            }
            {/* {route.parentZUID == null && route.children.length == 0 &&
             
                <SingleNavItem
                  title={route.title}
                  id={route.zuid}
                  url={route.url}
                  colorInvert={colorInvert}
                  />
            } */}
          </Box>
        ))}

       

        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="https://accounts.zesty.io"
          >
            Login
          </Button>
        </Box>
        <Box marginTop={1}>
          <TryFreeButton 
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth="true"
            component="a"
            target="blank"
          />
         
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  customNavigation: PropTypes.array.isRequired,
};

export default SidebarNav;
