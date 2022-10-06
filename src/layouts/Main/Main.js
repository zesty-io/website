import React, { useState } from 'react';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import useScrollTrigger from '@mui/material/useScrollTrigger';

// import Container from 'components/Container';
import TopNav from 'components/globals/TopNav';

import { Topbar, Sidebar, Footer, AppNavigation } from './components';

import { getCookie, setCookie } from 'cookies-next';
import { useZestyStore } from 'store';
import { Container } from '@mui/material';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { AccountsAppbar } from 'components/console/AccountsAppbar';
import { grey } from '@mui/material/colors';

const Main = ({
  children,
  customRouting,
  nav = [],
  colorInvert = false,
  bgcolor = 'transparent',
  model = '',
}) => {
  const { setisAuthenticated, setisUser } = useZestyStore((state) => state);

  // main should verify the user as boolean
  const router = useRouter();

  // const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  // const userAppSID = getUserAppSID();
  const { verifySuccess, loading, userInfo } = useZestyStore((state) => state);

  const isLoggedIn = useIsLoggedIn();

  const isAuthenticated = verifySuccess.userZuid ? true : false;
  let isUser = false;

  const hasRouting = customRouting !== undefined ? true : false;
  const theme = useTheme();

  if (getCookie('APP_SID') || getCookie('DEV_APP_SID')) {
    isUser = true;
  }
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

  // check if from ppc short form page then change color of logo and nav
  // const isPpcShortPage =
  //   router.asPath === zestyLink(nav, '7-f8d2b2fb82-vgg2t4');

  const isPpcShortPage = router.asPath.includes('ppc' && '-demo');
  const isCapterraPage = router.asPath.includes('/capterra');
  const isDxpTemplatePage = router.asPath.includes('/dxp-rfp-template/');
  const isExplorePage = router.asPath.includes('/ppc/explore/');
  // override over invert based on pages that we know have a dark image heading

  const hideNav = isPpcShortPage || isCapterraPage || isDxpTemplatePage;

  let pageNavColorRegex = new RegExp(/\bmindshare\b|article/gi);
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

  const isDashboard = window.location.pathname.split('/').filter((e) => e)[0];

  // store isUser isAuthenticated  in global state
  React.useEffect(() => {
    if (isAuthenticated) {
      setisAuthenticated(isAuthenticated);
      setisUser(isUser);
      setCookie('isAuthenticated', isAuthenticated);
      setCookie('isUser', isUser);
    }
  }, [isAuthenticated, isUser]);

  return (
    <Box>
      {isLoggedIn === false && (
        <Box
          id="topNavBox"
          bgcolor={bgcolor}
          position={'relative'}
          zIndex={theme.zIndex.appBar}
          display={router?.query?.slug?.[0] === 'login' && 'none'}
        >
          <Container
            maxWidth={isLoggedIn ? false : true}
            sx={(theme) => ({
              maxWidth: isLoggedIn
                ? theme.breakpoints.values.xl2
                : theme.breakpoints.values.lg,
            })}
            paddingTop={
              hideNav || isExplorePage ? '0px !important' : '8px !important'
            }
            paddingBottom={'0 !important'}
          >
            <TopNav nav={nav} colorInvert={headerColorInvert} />
          </Container>
        </Box>
      )}
      <AppBar
        position={hideNav ? 'fixed' : 'sticky'}
        sx={{
          outline: 'none',
          border: 'none',
          boxShadow: hideNav ? '' : '',
          top: 0,
          backgroundColor: bgColorSwitch(),
          pb: 1,
          display: router?.query?.slug?.[0] === 'login' && 'none',
          borderBottom: isLoggedIn && `1px solid ${grey[200]}`,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container
          maxWidth={isLoggedIn ? false : true}
          sx={(theme) => ({
            maxWidth: isLoggedIn
              ? theme.breakpoints.values.xl2
              : theme.breakpoints.values.lg,
          })}
          paddingY={isExplorePage ? 2 : 1}
        >
          {!isLoggedIn && (
            <Topbar
              onSidebarOpen={handleSidebarOpen}
              customRouting={hasRouting ? customRouting : []}
              colorInvert={headerColorInvert && !trigger}
              trigger={trigger}
              isAuthenticated={isAuthenticated}
              userInfo={userInfo?.data}
              loading={loading}
            />
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
              <AccountsAppbar />
            </>
          )}
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        customRouting={hasRouting ? customRouting : []}
      />
      <main>
        {children}
        <Divider
          sx={{
            display: router?.query?.slug?.[0] === 'login' && 'none',
          }}
        />
      </main>
      {isLoggedIn == false && (
        <Footer
          colorInvert={colorInvert}
          customRouting={hasRouting ? customRouting : []}
        />
      )}
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  routing: PropTypes.array,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
