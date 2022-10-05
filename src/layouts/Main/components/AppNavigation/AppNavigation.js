import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AccountsComboBox,
  DeveloperDocMenu,
  ProfileMenu,
} from 'components/accounts';
import { useZestyStore } from 'store';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { hashMD5 } from 'utils/Md5Hash';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import {
  IconButton,
  lighten,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { isProtectedRoute } from 'lib/protectedRouteGetServerSideProps';
import { AccountsThemeToggler } from 'components/globals/AccountsThemeToggler';
import { AccountsSingleNavItem } from '../Topbar/components/NavItem/AccountsSingleNavItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

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

  const isLoggedIn = useIsLoggedIn();

  const isAccounts = isProtectedRoute(window.location.pathname);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isSM = useMediaQuery(theme.breakpoints.down('md'));
  const isMD = useMediaQuery(theme.breakpoints.up('md'));
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setIsToggle(false);
  }, [isMD]);

  return (
    <>
      <Stack direction="row">
        <Link href="/">
          <img
            src="https://brand.zesty.io/zesty-io-logo.svg"
            height={40}
            width={40}
          />
        </Link>
        <Stack
          direction="row"
          width="100%"
          ml={4}
          display={{ xs: 'none', md: 'flex' }}
        >
          <Stack direction="row" alignItems="center" spacing={4} mr={2}>
            {navigationLinks.map((nav) => (
              <AccountsSingleNavItem
                key={nav.id}
                title={nav.title}
                url={nav.url}
                colorInvert={colorInvert}
              />
            ))}
            <DeveloperDocMenu />
          </Stack>
          <Stack direction="row" ml="auto" spacing={4} alignItems="center">
            {isLG && (
              <AccountsComboBox
                instances={instances?.data}
                setCookies={handleComboxClick}
                instanceZUID={instanceZUID}
                size="small"
              />
            )}
            <AccountsThemeToggler />

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
                  <ArrowDropDownIcon color={'disabled'} fontSize="medium" />
                </Stack>
              }
            />
          </Stack>
        </Stack>
        {isSM && (
          <IconButton
            onClick={() => setIsToggle((prev) => !prev)}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Stack>
      {isToggle && (
        <List>
          {navigationLinks.map((list, index) => (
            <ListItem
              key={index}
              href={list.url}
              component="a"
              disablePadding
              selected={
                list.url === '/'
                  ? list.url === router.asPath
                  : router.asPath.startsWith(list.url)
              }
              sx={(theme) => ({
                borderRadius: '5px',
                my: 1,
                color: theme.palette.text.secondary,
                '&.Mui-selected': {
                  ' .MuiListItemIcon-root': {
                    color: theme.palette.primary.main,
                  },
                  bgcolor: lighten(theme.palette.primary.light, 0.9),
                  pointerEvents: 'none',
                  color: theme.palette.primary.main,
                },
              })}
            >
              <ListItemButton color="warning" sx={{ borderRadius: '5px' }}>
                <ListItemText primary={list.title} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem href="/logout" component="a" disablePadding>
            <ListItemButton color="warning" sx={{ borderRadius: '5px' }}>
              <ListItemText primary="Logout" sx={{ color: 'text.secondary' }} />
            </ListItemButton>
          </ListItem>
        </List>
      )}

      {/* <Button
            color={
              (isAccounts && isLoggedIn) ||
              (isLoggedIn && window.location.pathname === '/')
                ? 'primary'
                : 'secondary'
            }
            size="medium"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ whiteSpace: 'nowrap' }}
            onClick={() =>
              router.push('https://accounts.zesty.io/instances/create')
            }
          >
            Create Instance
          </Button> */}

      {/* <Button
            href="https://accounts.zesty.io/"
            variant="outlined"
            size="medium"
            id="accounts-legacy"
            className="accounts-legacy-button"
            endIcon={<ExitToAppIcon />}
            sx={({ palette: { mode } }) => {
              const adjustedGrey = mode === 'light' ? grey[500] : grey[200];
              return {
                whiteSpace: 'nowrap',
                border: `1px solid ${adjustedGrey}`,
                color: adjustedGrey,
                '&.MuiButtonBase-root:hover': {
                  border: `1px solid ${adjustedGrey}`,
                },
              };
            }}
          >
            Legacy Accounts
          </Button> */}
    </>
  );
};

AppNavigation.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default React.memo(AppNavigation);
