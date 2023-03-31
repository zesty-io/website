import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import TopNav from 'components/globals/TopNav';
import { Topbar, Sidebar, Footer, AppNavigation } from './components';
import { setCookie } from 'cookies-next';
import { useZestyStore } from 'store';
import { Container, Stack } from '@mui/material';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { AccountsAppbar } from 'components/console/AccountsAppbar';
import { grey } from '@mui/material/colors';
import { isProtectedRoute } from 'lib/accounts/protectedRouteGetServerSideProps';
import AppFooter from './components/Footer/AppFooter';
import SiteBanner from 'components/marketing/SiteBanner/SiteBanner';
import { useRouterCheck } from 'utils';
import { DocsAppbar } from 'components/console/DocsAppbar';

const Main = ({
  docsLanding = false,
  children,
  customRouting,
  nav = [],
  colorInvert = false,
  bgcolor = 'transparent',
  model = '',
  flyoutNavigation,
}) => {
  // main should verify the user as boolean
  const router = useRouter();
  const [pathname, setPathname] = useState('');
  const isAccounts = isProtectedRoute(pathname);
  const { loading, userInfo } = useZestyStore((state) => state);
  const hasRouting = customRouting !== undefined ? true : false;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });

  const isPpcShortPage = router.asPath.includes('ppc' && '-demo');
  const isCapterraPage = router.asPath.includes('/capterra');
  const isDxpTemplatePage = router.asPath.includes('/dxp-rfp-template/');
  const isExplorePage = router.asPath.includes('/ppc/explore/');
  const isLoginPage = router.asPath.includes('/login/');
  const isDiscover = router.asPath.includes('/discover/');
  const isDocsPage = useRouterCheck('docs');
  // override over invert based on pages that we know have a dark image heading

  const hideNav =
    isPpcShortPage || isCapterraPage || isDxpTemplatePage || isDiscover;
  const isLoggedIn = useIsLoggedIn();
  const pageNavColorRegex = new RegExp(/\bmindshare\b|article/gi);
  const headerColorInvert =
    model?.match(pageNavColorRegex) !== null ? true : false;

  const bgColorSwitch = () => {
    if (isExplorePage) {
      return theme.palette.alternate.main;
    } else if (trigger) {
      return theme.palette.background.paper;
    } else if (hideNav) {
      return 'transparent';
    } else {
      return bgcolor;
    }
  };

  const willShowMarketingFooter = () => {
    if (isLoggedIn) {
      if (isAccounts || pathname === '/') return false;

      return true;
    }

    return true;
  };

  const willShowAppFooter = () => {
    if (isLoggedIn) {
      if (isAccounts || pathname === '/') return true;

      return false;
    }

    return false;
  };

  useEffect(() => {
    if (Object.keys(userInfo?.data || {}) !== 0) {
      setCookie('APP_USER_ZUID', userInfo?.ZUID);
      setCookie('APP_USER_EMAIL', userInfo?.email);
      setCookie('APP_USER_FIRST_NAME', userInfo?.firstName);
      setCookie('APP_USER_LAST_NAME', userInfo?.lastName);
    }
  }, [userInfo]);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <>
      {isLoggedIn === false && !isLoginPage && !isDocsPage && <SiteBanner />}

      {isLoggedIn === false && (
        <Box
          data-testid="topBar"
          id="topNavBox"
          bgcolor={bgcolor}
          position={'relative'}
          zIndex={theme.zIndex.appBar}
          display={router?.query?.slug?.[0] === 'login' && 'none'}
        >
          <Container
            maxWidth={isLoggedIn ? false : ''}
            sx={(theme) => ({
              paddingTop:
                hideNav || isExplorePage ? '0px !important' : '8px !important',
              paddingBottom: '0 !important',
              maxWidth: isLoggedIn
                ? theme.breakpoints.values.xl2
                : theme.breakpoints.values.lg,
            })}
          >
            <TopNav
              hideNav={hideNav}
              nav={nav}
              colorInvert={headerColorInvert}
            />
          </Container>
        </Box>
      )}
      <AppBar
        data-testid="mainNav"
        position={isDiscover ? 'sticky' : hideNav ? 'fixed' : 'sticky'}
        sx={{
          outline: 'none',
          border: 'none',
          boxShadow: hideNav ? '' : '',
          top: 0,
          backgroundColor: bgColorSwitch(),
          py: 1,
          display: router?.query?.slug?.[0] === 'login' && 'none',
          borderBottom: (isLoggedIn || isDocsPage) && `1px solid ${grey[200]}`,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container
          maxWidth={isLoggedIn ? false : ''}
          sx={(theme) => ({
            maxWidth: isLoggedIn
              ? theme.breakpoints.values.xl2
              : theme.breakpoints.values.lg,
            paddingY: isExplorePage ? 2 : 1,
          })}
        >
          {!isLoggedIn && (
            <Stack>
              <Topbar
                hideNav={hideNav}
                onSidebarOpen={handleSidebarOpen}
                flyoutNavigation={flyoutNavigation}
                customRouting={hasRouting ? customRouting : []}
                colorInvert={headerColorInvert && !trigger}
                trigger={trigger}
                isAuthenticated={isLoggedIn}
                userInfo={userInfo?.data}
                loading={loading}
              />
            </Stack>
          )}
          {isLoggedIn && (
            <>
              <AppNavigation
                onSidebarOpen={handleSidebarOpen}
                colorInvert={headerColorInvert && !trigger}
                trigger={trigger}
                userInfo={userInfo?.data}
                loading={loading}
              />
              <AccountsAppbar colorInvert={headerColorInvert && !trigger} />
            </>
          )}
        </Container>

        {isDocsPage && !docsLanding && <DocsAppbar />}
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        flyoutNavigation={flyoutNavigation}
        customRouting={hasRouting ? customRouting : []}
      />
      <main>
        {children}
        <Divider
          sx={{
            display:
              (router?.query?.slug?.[0] === 'login' || willShowAppFooter()) &&
              'none',
            mt: 5,
          }}
        />
      </main>
      {willShowMarketingFooter() && (
        <Footer
          colorInvert={colorInvert}
          customRouting={hasRouting ? customRouting : []}
        />
      )}

      {willShowAppFooter() && <AppFooter />}
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  routing: PropTypes.array,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
