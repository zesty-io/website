import { Box } from '@mui/material';
import { memo } from 'react';
import dynamic from 'next/dynamic';

const NavItem = dynamic(() => import('./NavItem'));
const SingleNavItem = dynamic(() => import('./NavItem/SingleNavItem'));

function FlyoutNav({
  hideNav,
  flyoutNavigation,
  hashString,
  activeNav,
  navHandler,
  colorInvert,
}) {
  return (
    <Box
      sx={{
        gap: 2,
        display: {
          xs: 'none',
          md: hideNav ? 'none' : 'flex',
          alignItems: 'center',
        },
        'a::before, p::before': {
          display: 'block',
          content: 'attr(title)',
          fontWeight: 'bold',
          height: 0,
          overflow: 'hidden',
          visibility: 'hidden',
        },
      }}
    >
      {flyoutNavigation.map((route) => (
        <Box display="flex" height="100%" key={hashString(route.nav_title)}>
          {/* If link in the cms is empty and column one is not equal to zero it must be a parent navigation with flyout navigation */}
          {route.link === null && route.column_1_items.length != 0 && (
            <Box display="flex" height="100%">
              <NavItem
                activeNav={
                  activeNav.filter((item) => item.isActive === true)[0]
                }
                navHandler={navHandler}
                route={route}
                id={hashString(route.nav_title)}
                colorInvert={colorInvert}
              />
            </Box>
          )}
          {/* if link is set in the cms and column one items is empty its a single item navigation without flyout */}
          {route.link != null && !route.column_1_items && (
            <Box display="flex" height="100%">
              <SingleNavItem
                title={route.nav_title}
                url={route.link}
                colorInvert={colorInvert}
              />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default memo(FlyoutNav);
