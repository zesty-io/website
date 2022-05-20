import React from 'react';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { ComboBox } from 'components/AutoComplete';
import { Button } from '@mui/material';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie, setCookies } from 'cookies-next';

export default function AppBar({ url = '' }) {
  const theme = useTheme();
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getCookie('APP_SID');

  let splitURL = url.split('/');
  let ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  console.log(ZestyAPI.getModels());
  function generateURLFromSplit(depth, urlSplit) {
    let url = `/`;
    for (i = 0; i <= depth; i++) {
      url = url + `${urlSplit[i]}/`;
    }
    return url;
  }

  const {
    loading,
    verifyFailed,
    verifySuccess,
    instances,
    views,
    models,
    userInfo,
  } = useFetchWrapper(userAppSID, instanceZUID);

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.data?.email);

  console.log(profileUrl, 111);
  // Reference
  React.useEffect(() => {
    console.log(
      instances,
      'instance',
      views,
      'views',
      models,
      'models',
      loading,
      'loading',
      verifyFailed,
      'verifFailkd',
      verifySuccess,
      'verifSUcess',
      userInfo,
      'userInfor',
      'datas',
    );
  }, [instances, models, views]);

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
          <Breadcrumbs aria-label="breadcrumb">
            {splitURL.map((url, index) => (
              <Link underline="hover" color="inherit" href="/docs/">
                Docs
              </Link>
            ))}

            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Breadcrumbs
            </Link>
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
                    // borderRadius: '50%',
                    // padding: '.5rem',
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
