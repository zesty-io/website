import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { NavItem } from './components';
import TryFreeButton from 'components/cta/TryFreeButton';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';
import { setCookie } from 'cookies-next';
import SingleNavItem from './components/NavItem/SingleNavItem.js';
import ClickAwayListener from '@mui/base/ClickAwayListener';

const Topbar = ({
  hideNav,
  onSidebarOpen,
  customRouting,
  colorInvert = false,
  trigger,
  userInfo = {},
  loading = false,
  flyoutNavigation: data = [],
}) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  //check if page is from ppc for hiding of footer and nav
  const isCapterraPage = router.asPath.includes('/capterra');
  const isDxpTemplatePage = router.asPath.includes('/dxp-rfp-template/');
  const isPpcShortPage = router.asPath.includes('ppc' && '-demo');

  // for changing the logo color base on pages
  // affected pages dxp, capterra, ppc, ppc long , ppc short ,ppc explore
  const changeLogoColor = () => {
    if (isDxpTemplatePage || isCapterraPage || isPpcShortPage) {
      return trigger;
    }
    return mode === 'light' && !colorInvert;
  };

  useEffect(() => {
    if (userInfo) {
      setCookie('APP_USER_ZUID', userInfo?.ZUID);
      setCookie('APP_USER_EMAIL', userInfo?.email);
      setCookie('APP_USER_FIRST_NAME', userInfo?.firstName);
      setCookie('APP_USER_LAST_NAME', userInfo?.lastName);
    }
  }, [userInfo]);

  // Sort the navigation data array to match with the sorting on the cms
  const flyoutNavigation = data.sort((item1, item2) =>
    item1.sort_order > item2.sort_order
      ? 1
      : item1.sort_order < item2.sort_order
      ? -1
      : 0,
  );

  /**
   * Hold navigation state and track which flyout is active
   */
  const [activeNav, setActiveNav] = useState(
    flyoutNavigation
      .filter((route) => route.link === null)
      .map((url) => {
        return { id: url.meta.zuid, isActive: false };
      }),
  );

  /**
   * Mutate navigation state to set new active flyout or close it once clickawayhandler is triggered
   */
  const navHandler = (e, id) => {
    setActiveNav((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isActive: !obj.isActive };
        }
        return { ...obj, isActive: false };
      }),
    );
  };

  return (
    <ClickAwayListener onClickAway={navHandler}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            pt: isDxpTemplatePage ? 4 : 0,
          }}
          component="a"
          href="/"
          title="Zesty.io Platform"
          width={{ xs: 100, md: 150 }}
        >
          <img
            alt="zesty.io"
            src={
              changeLogoColor()
                ? 'https://brand.zesty.io/zesty-io-logo-horizontal.svg'
                : 'https://brand.zesty.io/zesty-io-logo-horizontal-light-color.svg'
            }
            height={42}
            width={150}
          />
        </Box>

        <Box
          sx={{
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
            <Box key={route.meta.zuid}>
              {/* If link in the cms is empty and column one is not equal to zero it must be a parent navigation with flyout navigation */}
              {route.link === null && route.column_1_items.length != 0 && (
                <Box marginLeft={3}>
                  <NavItem
                    activeNav={
                      activeNav.filter((item) => item.isActive === true)[0]
                    }
                    navHandler={navHandler}
                    route={route}
                    id={route.meta.zuid}
                    colorInvert={colorInvert}
                  />
                </Box>
              )}
              {/* if link is set in the cms and column one items is empty its a single item navigation without flyout */}
              {route.link != null && !route.column_1_items && (
                <Box marginLeft={3}>
                  <SingleNavItem
                    title={route.nav_title}
                    id={route.meta.zuid}
                    url={route.link}
                    colorInvert={colorInvert}
                  />
                </Box>
              )}
            </Box>
          ))}
          {loading && (
            <Skeleton variant="rectangular" width={180} height={30} />
          )}
          {!loading && (
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Box display={'flex'}>
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
                    href="/login/"
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>

        {!hideNav && (
          <Box
            sx={{ display: { xs: 'block', md: 'none' } }}
            alignItems={'center'}
          >
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
        )}
      </Box>
    </ClickAwayListener>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(Topbar);
