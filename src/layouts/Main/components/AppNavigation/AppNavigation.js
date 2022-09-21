import React from 'react';
import PropTypes from 'prop-types';
import SingleNavItem from '../Topbar/components/NavItem/SingleNavItem';
import { ComboBox } from 'components/globals/ComboBox';
import ThemeModeToggler from 'components/globals/ThemeModeToggler';
import { DeveloperDocMenu, ProfileMenu } from 'components/accounts';
import { useZestyStore } from 'store';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { Button, Link, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { grey } from '@mui/material/colors';

const navigationLinks = [
  {
    title: 'Dashboard',
    id: 'dashboard',
    url: '/',
  },
  {
    title: 'Instances',
    id: 'instances',
    url: '/instances/',
  },
  {
    title: 'Teams',
    id: 'teams',
    url: '/teams/',
  },
  {
    title: 'Marketplace',
    id: 'marketplace',
    url: '/marketplace/',
  },
];

const AppNavigation = ({
  onSidebarOpen,
  colorInvert = false,
  loading = false,
  trigger,
}) => {
  const router = useRouter();
  const { instances, setworkingInstance, userInfo } = useZestyStore(
    (state) => state,
  );

  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');

  const isMarketplace =
    window.location.pathname.split('/').filter((e) => e)[0] === 'marketplace'
      ? true
      : false;

  const handleComboxClick = (zuid) => {
    setCookie('ZESTY_WORKING_INSTANCE', zuid);
    if (!isMarketplace) {
      setworkingInstance(zuid);
      window.location.href = `/instances/${zuid}/`;
    }
  };
  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);

  return (
    <Stack direction="row">
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
        flexWrap="wrap"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {navigationLinks.map((nav) => (
            <SingleNavItem
              key={nav.id}
              title={nav.title}
              url={nav.url}
              colorInvert={colorInvert}
            />
          ))}
        </Stack>
        <Stack direction="row" ml="auto" spacing={2} alignItems="center">
          <DeveloperDocMenu />
          <ComboBox
            instances={instances?.data}
            setCookies={handleComboxClick}
            instanceZUID={instanceZUID}
            size="small"
          />
          <Button
            color={!isMarketplace ? 'primary' : 'secondary'}
            size="medium"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() =>
              router.push('https://accounts.zesty.io/instances/create')
            }
          >
            Create Instance
          </Button>
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
          <Button
            href="https://accounts.zesty.io/"
            variant="outlined"
            size="medium"
            id="accounts-legacy"
            className="accounts-legacy-button"
            endIcon={<ExitToAppIcon />}
            sx={({ palette: { mode } }) => {
              const adjustedGrey = mode === 'light' ? grey[500] : grey[200];
              return {
                border: `1px solid ${adjustedGrey}`,
                color: adjustedGrey,
                '&.MuiButtonBase-root:hover': {
                  border: `1px solid ${adjustedGrey}`,
                },
              };
            }}
          >
            Legacy Accounts
          </Button>
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
