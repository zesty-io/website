import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavItem from './components/NavItem';
import TryFreeButton from 'components/cta/TryFreeButton';

const SidebarNav = ({ customRouting }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  let path = (window && window.location) ? window.location.pathname : '';
  const hasActiveLink = (url) => (path == url);
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
            {/* Items with Children */}
            {route.parentZUID == null && route.children.length > 0 &&
              <NavItem
                title={route.title}
                id={route.zuid}
                items={route.children}
              />
            }
            {/* Single Items */}
            {route.parentZUID == null && route.children.length == 0 &&
              <Typography sx={{mt: 1, mb: 1}}>
                <Link href={route.url}
                  fontWeight={hasActiveLink(route.url) ? 600 : 400}
                  color={hasActiveLink(route.url) ? 'primary' : 'text.primary'}
                  underline="none"
                  >
                  {route.title}
                </Link>
              </Typography>
            }
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
  customRouting: PropTypes.array.isRequired,
};

export default SidebarNav;
