import React from 'react';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { ComboBox } from 'components/globals/ComboBox';
import { Button, useMediaQuery } from '@mui/material';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie, setCookies } from 'cookies-next';
import HomeIcon from '@mui/icons-material/Home';
import Skeleton from '@mui/material/Skeleton';
import { useZestyStore } from 'store';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { ProfileMenu } from 'components/accounts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';
import ThemeModeToggler from 'components/globals/ThemeModeToggler';

const developerDocs = [
  { name: 'Guides and Docs', ZUID: 'https://zesty.org/' },
  { name: 'Node SDK', ZUID: 'https://github.com/zesty-io/node-sdk' },
  { name: 'Instance API', ZUID: 'https://instances-api.zesty.org/' },
  { name: 'Accounts API', ZUID: 'https://accounts-api.zesty.org/' },
  { name: 'Auth API', ZUID: 'https://auth-api.zesty.org/' },
  { name: 'Media API', ZUID: 'https://media-api.zesty.org/' },
  { name: 'Fetch Wrapper', ZUID: 'https://github.com/zesty-io/fetch-wrapper' },
  { name: 'Status', ZUID: 'https://status.zesty.io/' },
  { name: 'Parsley', ZUID: 'https://github.com/zesty-io/parsley' },
];
export default function AppBar({ url = window.location.pathname }) {
  const router = useRouter();
  const { verifySuccess, instances, userInfo, loading, setworkingInstance } =
    useZestyStore((state) => state);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const isLoggedIn = useIsLoggedIn();

  // get param from url to look for instance
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if (params.instanceZUID) {
    setCookies('ZESTY_WORKING_INSTANCE', params.instanceZUID);
    instanceZUID = params.instanceZUID;
  }

  // remove query param and splits the url
  let pathnames = url
    .split('?')[0]
    .split('/')
    .filter((e) => e);

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);

  React.useEffect(() => {
    setworkingInstance(instanceZUID);
  }, [instanceZUID]);

  const handleDocs = (data) => {
    console.log(data, 555);
    router.push(data);
  };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.level2,
        marginTop: '10px',
        py: 1,
      }}
    >
      <Container
        maxWidth={isLoggedIn ? false : true}
        sx={(theme) => ({
          maxWidth: isLoggedIn
            ? theme.breakpoints.values.xl2
            : theme.breakpoints.values.lg,
        })}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'left' : 'center',
            flexDirection: isMobile ? 'column' : 'flex',
            gap: isMobile ? '1rem' : '0',
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
              underline="hover"
              color="inherit"
              href={'/'}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <HomeIcon sx={{ mr: 0.5 }} />
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
                  }}
                  underline="hover"
                  color="text.primary"
                  href={routeTo}
                  aria-current="page"
                  key={name}
                >
                  {name}
                </Link>
              ) : (
                <Link
                  underline="hover"
                  color="inherit"
                  href={routeTo}
                  key={index}
                  sx={{
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
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
                    initialLabel="Developer Docs"
                    instances={developerDocs}
                    setCookies={handleDocs}
                    instanceZUID={''}
                    size="small"
                  />
                  <ComboBox
                    instances={instances?.data}
                    setCookies={setworkingInstance}
                    instanceZUID={instanceZUID}
                    size="small"
                  />

                  <ThemeModeToggler />
                  <ProfileMenu
                    userInfo={userInfo}
                    profilePic={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={profileUrl}
                          alt="User"
                          height={50}
                          width={50}
                          style={{ borderRadius: '50%' }}
                        />
                        <ArrowDropDownIcon fontSize="medium" />
                      </Box>
                    }
                  />
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
