import React from 'react';
import PropTypes from 'prop-types';
import SingleNavItem from '../Topbar/components/NavItem/SingleNavItem';
import { ComboBox } from 'components/globals/ComboBox';
import ThemeModeToggler from 'components/globals/ThemeModeToggler';
import { DeveloperDocMenu, ProfileMenu } from 'components/accounts';
import { useZestyStore } from 'store';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie } from 'cookies-next';
import { Link, Stack, Typography } from '@mui/material';

const navigationLinks = [
  {
    id: '1',
    title: 'Instances',
    url: '/instances/',
  },
  {
    id: '2',
    title: 'Teams',
    url: '/teams/',
  },
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
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');

  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  return (
    <Stack direction="row">
      {/* if user not logged in show full logo  */}
      <Link href="/">
        <img
          src="https://brand.zesty.io/zesty-io-logo.svg"
          height={41}
          width={41}
        />
      </Link>
      <Stack
        direction="row"
        width="100%"
        ml={4}
        display={{ xs: 'none', md: 'flex' }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {navigationLinks.map((nav) => (
            <SingleNavItem
              key={nav.id}
              title={nav.title}
              id={nav.id}
              url={nav.url}
              colorInvert={colorInvert}
            />
          ))}
        </Stack>
        <Stack direction="row" ml="auto" spacing={2} alignItems="center">
          <DeveloperDocMenu
            parent={
              <Stack
                sx={{
                  color: '#333333',
                }}
              >
                <Typography variant="body1">Developer Docs</Typography>
              </Stack>
            }
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
              <Stack direction="row">
                <img
                  src={profileUrl}
                  alt="User"
                  height={25}
                  width={25}
                  style={{ borderRadius: '50%' }}
                />
                <ArrowDropDownIcon color="primary" fontSize="medium" />
              </Stack>
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

AppNavigation.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(AppNavigation);
