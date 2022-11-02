import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Button, useMediaQuery } from '@mui/material';
import { getCookie, setCookie } from 'cookies-next';
import HomeIcon from '@mui/icons-material/Home';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { grey } from '@mui/material/colors';

export const AccountsAppbar = ({ colorInvert = false }) => {
  const [url, setUrl] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [pathname, setPathname] = useState('');
  const router = useRouter();
  const { verifySuccess, ZestyAPI, loading, setworkingInstance } =
    useZestyStore((state) => state);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const [instance, setinstance] = React.useState([]);
  const { zuid } = router.query;
  const linkColor = colorInvert ? 'common.white' : 'text.secondary';

  // get param from url to look for instance
  const params = new Proxy(new URLSearchParams(locationSearch), {
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
    if (zuid) {
      const res = await ZestyAPI.getInstance(zuid);
      !res.error && handleGetInstanceSuccess(res);
      res.error && handleGetInstanceError(res);
    }
  };

  React.useEffect(() => {
    if (router.isReady) {
      getInstance();
      setUrl(window.location.pathname);
      setLocationSearch(window.location.search);
      setPathname(window.location.pathname);
    }
  }, [router.isReady, url]);
  React.useEffect(() => {
    setworkingInstance(instanceZUID);
  }, [instanceZUID]);

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
            color: linkColor,
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

        {pathname === '/' && (
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
            color={linkColor}
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
              color={linkColor}
              href={routeTo}
              aria-current="page"
              key={index}
            >
              {name}
            </Link>
          ) : (
            <Link
              underline="none"
              color={linkColor}
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
