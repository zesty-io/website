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

const Topbar = ({
  hideNav,
  onSidebarOpen,
  customRouting,
  colorInvert = false,
  trigger,
  userInfo = {},
  loading = false,
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

  /**
   * Navigation Handler
   */
  const [activeNav, setActiveNav] = useState(
    customRouting
      .filter((route) => route.children.length > 0)
      .map((url) => {
        return { id: url.zuid, isActive: false };
      }),
  );

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
        }}
      >
        {customRouting.map((route) => (
          <Box key={route.zuid}>
            {route.parentZUID == null && route.children.length > 0 && (
              <Box marginLeft={4}>
                <NavItem
                  activeNav={
                    activeNav.filter((item) => item.isActive === true)[0]
                  }
                  navHandler={navHandler}
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
        {loading && <Skeleton variant="rectangular" width={180} height={30} />}
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
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(Topbar);
