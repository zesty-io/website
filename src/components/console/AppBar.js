import React from 'react';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { ComboBox } from 'components/globals/ComboBox';
import { Button, useMediaQuery } from '@mui/material';
import { getCookie, setCookie, setCookies } from 'cookies-next';
import HomeIcon from '@mui/icons-material/Home';
import Skeleton from '@mui/material/Skeleton';
import { getUserAppSID } from 'utils';
import { hashMD5 } from 'utils/Md5Hash';

export default function AppBar({ url = window.location.pathname }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getUserAppSID();

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

  const { verifySuccess, instances, userInfo, loading } = useFetchWrapper(
    userAppSID,
    instanceZUID,
  );

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.data?.email);

  return (
    <Box
      sx={{
        py: 1,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'left' : 'center',
            flexDirection: isMobile ? 'column' : 'flex',
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link
              underline="none"
              color="inherit"
              href={'/'}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <HomeIcon sx={{ mr: 0.5, color: 'GrayText' }} />
            </Link>
            {pathnames?.map((url, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}/`;
              const isLastItem = index === pathnames.length - 1;
              const name = url.replaceAll('-', ' ');
              return isLastItem ? (
                <Link
                  sx={{
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    px: 2,
                    pointerEvents: 'none',
                  }}
                  underline="none"
                  color="text.secondary"
                  href={routeTo}
                  aria-current="page"
                >
                  {name}
                </Link>
              ) : (
                <Link
                  underline="none"
                  color="text.secondary"
                  href={routeTo}
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
          {loading && (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Skeleton variant="rectangular" width={270} height={50} />
              <Skeleton variant="rectangular" width={50} height={50} />
            </Box>
          )}
          {!loading && (
            <Box>
              {!verifySuccess ? (
                <Button
                  href={`https://accounts.zesty.io/login`}
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Sign in to Zesty.io
                </Button>
              ) : (
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <ComboBox
                    instances={instances?.data}
                    setCookies={setCookies}
                    instanceZUID={instanceZUID}
                  />
                  <Box
                    boxShadow={2}
                    sx={{
                      backgroundColor: theme.palette.common.white,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={profileUrl} alt="" height={40} width={40} />
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
