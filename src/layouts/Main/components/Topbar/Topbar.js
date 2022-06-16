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
import { Skeleton } from '@mui/material';
import { setCookies } from 'cookies-next';
import SingleNavItem from './components/NavItem/SingleNavItem.js';
import { Typography } from '@mui/material';

const Topbar = ({
  onSidebarOpen,
  customRouting,
  colorInvert = false,
  trigger,
  isLogin,
  userInfo = {},
  loading = false,
}) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  //check if page is from ppc for hiding of footer and nav
  const isPpcPage = router.asPath.includes('/ppc');
  const isCapterraPage = router.asPath.includes('/capterra');
  const isDxpTemplatePage = router.asPath.includes('/dxp-rfp-template/');
  const isPpcShortPage = router.asPath.includes('ppc' && '-demo');

  const hideNav = isPpcPage || isCapterraPage || isDxpTemplatePage;

  // for changing the logo color base on pages
  // affected pages dxp, capterra, ppc, ppc long , ppc short ,ppc explore
  const changeLogoColor = () => {
    if (isDxpTemplatePage || isCapterraPage || isPpcShortPage) {
      return trigger;
    }
    return mode === 'light' && !colorInvert;
  };

  const firstName = userInfo?.firstName;
  const openAccountInstances = () => {
    window.open('https://accounts.zesty.io/instances', '_blank').focus();
  };

  React.useEffect(() => {
    if (userInfo) {
      setCookies('user_ZUID', userInfo.ZUID);
      setCookies('user_email', userInfo.email);
      setCookies('user_firstName', userInfo.firstName);
      setCookies('user_lastName', userInfo.lastName);
    }
  }, [userInfo]);

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
        paddingTop={isDxpTemplatePage ? 4 : 0}
      >
        <Box
          component={'img'}
          src={
            changeLogoColor()
              ? 'https://brand.zesty.io/zesty-io-logo-horizontal.svg'
              : 'https://brand.zesty.io/zesty-io-logo-horizontal-light-color.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: hideNav ? 'none' : 'flex' } }}
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
        {loading && <Skeleton variant="rectangular" width={180} height={30} />}
        {!loading && (
          <Box>
            {!isLogin ? (
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
                    href="https://accounts.zesty.io"
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box paddingLeft={4}>
                <Typography
                  color={theme.palette.primary.dark}
                  fontWeight={'bold'}
                >
                  Welcome back,{' '}
                  <span
                    style={{
                      color: theme.palette.zesty.zestyOrange,
                      cursor: 'pointer',
                    }}
                    onClick={openAccountInstances}
                  >
                    {firstName}!
                  </span>
                </Typography>
              </Box>
            )}
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
