import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavItem from './components/NavItem';
import TryFreeButton from 'components/cta/TryFreeButton';

const SidebarNav = ({ flyoutNavigation }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  let path = window && window.location ? window.location.pathname : '';
  const hasActiveLink = (url) => path == url;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
                ? 'https://brand.zesty.io/zesty-io-logo-horizontal.svg'
                : 'https://brand.zesty.io/zesty-io-logo-horizontal-light-color.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {flyoutNavigation.map((route) => (
          <Box>
            {/* Items with Children */}
            {route.link === null && route.column_1_items.length != 0 && (
              <NavItem
                title={route.nav_title}
                id={route.zuid}
                items={route}
                onChange={handleChange(route.nav_title)}
                expanded={expanded}
              />
            )}
            {/* Single Items */}
            {route.link != null && !route.column_1_items && (
              <Typography sx={{ mt: 1, mb: 1, py: 1 }}>
                <Link
                  href={route.link}
                  fontWeight={hasActiveLink(route.link) ? 600 : 400}
                  color={hasActiveLink(route.link) ? 'primary' : 'text.primary'}
                  underline="none"
                >
                  {route.nav_title}
                </Link>
              </Typography>
            )}
          </Box>
        ))}

        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/login"
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
  flyoutNavigation: PropTypes.array.isRequired,
};

export default SidebarNav;
