import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Button, useMediaQuery } from '@mui/material';
import { getCookie, setCookie } from 'cookies-next';
import HomeIcon from '@mui/icons-material/Home';
import { useZestyStore } from 'store';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { useRouter } from 'next/router';
import { grey } from '@mui/material/colors';

export const AccountsAppbar = ({ url = window.location.pathname }) => {
  const router = useRouter();
  const { verifySuccess, ZestyAPI, loading, setworkingInstance } =
    useZestyStore((state) => state);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const [instance, setinstance] = React.useState([]);
  const isLoggedIn = useIsLoggedIn();
  const { zuid } = router.query;

  // get param from url to look for instance
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if (params.instanceZUID) {
    setCookie('ZESTY_WORKING_INSTANCE', params.instanceZUID);
    instanceZUID = params.instanceZUID;
  }

  // remove query param and splits the url
  let pathnames = url
    .split('?')[0]
    .split('/')
    .filter((e) => e);

  const handleGetInstanceSuccess = (res) => {
    setinstance(res.data);
  };
  const handleGetInstanceError = (res) => {
    setinstance(res.data);
  };

  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
    res.error && handleGetInstanceError(res);
  };

  React.useEffect(() => {
    if (router.isReady) {
      getInstance();
    }
  }, [router.isReady, url]);
  React.useEffect(() => {
    setworkingInstance(instanceZUID);
  }, [instanceZUID]);

  console.log({ router });
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'left' : 'center',
        flexDirection: isMobile ? 'column' : 'flex',
        pt: 1,
        borderTop: `1px solid ${grey[200]}`,
      }}
    >
      <Breadcrumbs
        maxItems={5}
        aria-label="breadcrumb"
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& .MuiBreadcrumbs-separator': {
            opacity: '.4',
          },
        }}
      >
        <Link
          underline="none"
          color="inherit"
          href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HomeIcon
            sx={{
              mr: 0.5,
              color: grey[500],
            }}
          />
        </Link>

        {router.pathname === '/' && (
          <Link
            href="/"
            sx={{
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              px: 2,
              opacity: '.4',
              pointerEvents: 'none',
            }}
            underline="none"
            color="text.secondary"
            aria-current="page"
          >
            Dashboard
          </Link>
        )}

        {pathnames?.map((url, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}/`;
          const isLastItem = index === pathnames.length - 1;
          let name = url.replaceAll('-', ' ');
          if (url.match(/^8-.*$/)) {
            name = instance.name;
          }
          return isLastItem ? (
            <Link
              sx={{
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                px: 2,
                opacity: '.4',
                pointerEvents: 'none',
              }}
              underline="none"
              color="text.secondary"
              href={routeTo}
              aria-current="page"
              key={name}
            >
              {name}
            </Link>
          ) : (
            <Link
              underline="none"
              color="text.secondary"
              href={routeTo}
              key={index}
              sx={{
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                px: 2,
              }}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
      {!loading && (
        <Box>
          {!verifySuccess ? (
            <Button
              href="/login/"
              variant="contained"
              color="primary"
              size="small"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Sign in to Zesty.io
            </Button>
          ) : (
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            ></Box>
          )}
        </Box>
      )}
    </Box>
  );
};
