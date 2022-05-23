import React from 'react';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { ComboBox } from 'components/ComboBox';
import { Button } from '@mui/material';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie, setCookies } from 'cookies-next';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

export default function AppBar({ url = window.location.pathname }) {
  const theme = useTheme();
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getCookie('APP_SID');

  let pathnames = url.split('/').filter((e) => e);
  // let ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  // console.log(ZestyAPI.getModels());

  // function generateURLFromSplit(depth, urlSplit) {
  //   let url = `/`;
  //   for (i = 0; i <= depth; i++) {
  //     url = url + `${urlSplit[i]}/`;
  //   }
  //   return url;
  // }

  const { verifySuccess, instances, userInfo } = useFetchWrapper(
    userAppSID,
    instanceZUID,
  );

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.data?.email);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.level2,
        padding: '12px 0rem',
        marginTop: '10px',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
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
                >
                  {name}
                </Link>
              ) : (
                <Link
                  underline="hover"
                  color="inherit"
                  href={routeTo}
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
        </Box>
      </Container>
    </Box>
  );
}
