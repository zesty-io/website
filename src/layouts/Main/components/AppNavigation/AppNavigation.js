import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import SingleNavItem from '../Topbar/components/NavItem/SingleNavItem';
import { ComboBox } from 'components/globals/ComboBox';
import ThemeModeToggler from 'components/globals/ThemeModeToggler';
import { ProfileMenu } from 'components/accounts';
import { useZestyStore } from 'store';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie } from 'cookies-next';

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
const AppNavigation = ({
  onSidebarOpen,
  colorInvert = false,
  loading = false,
  trigger,
}) => {
  const { instances, setworkingInstance, userInfo } = useZestyStore(
    (state) => state,
  );
  const theme = useTheme();
  const { mode } = theme.palette;
  const router = useRouter();

  const firstName = userInfo?.firstName;

  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Zesty.io Dashboard"
        width={{ xs: 50, md: 50 }}
      >
        {/* if user not logged in show full logo  */}

        <Box
          component={'img'}
          src="https://brand.zesty.io/zesty-io-logo.svg"
          height={41}
          width={41}
        />
      </Box>
      <Box
        sx={{ width: '100%', display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
      >
        <Box
          display="flex"
          alignItems={'center'}
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Box display={'flex'}>
            <Box marginLeft={4}>
              <SingleNavItem
                title="Instances"
                id="instances"
                url="/instances"
                colorInvert={colorInvert}
              />
            </Box>
            <Box marginLeft={4}>
              <SingleNavItem
                title="Teams"
                id="teams"
                url="/teams"
                colorInvert={colorInvert}
              />
            </Box>
          </Box>
          <Box gap={2} display={'flex'} alignItems="center">
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
                  <ArrowDropDownIcon color="secondary" fontSize="medium" />
                </Box>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

AppNavigation.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(AppNavigation);
