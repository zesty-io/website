import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import {
  TextField,
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { setCookie } from 'cookies-next';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CustomMenu from './CustomMenu';
import useDropdown from 'components/hooks/useDropdown';
import { InstancesList } from './InstancesList';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { LaunchInstance } from './LaunchInstance';

const orderByItems = [
  {
    name: 'asc',
    label: 'Name (A to Z)',
  },
  {
    name: 'desc',
    label: 'Name (Z to A)',
  },
];

export const InstancesDashboard = () => {
  const [view, setView] = useState('grid');
  const [orderByValue, setOrderByValue, reset] = useDropdown();
  const [initialFavorites, setinitialFavorites] = useState([]);
  const router = useRouter();
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [instances, setInstances] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const [invites, setinvites] = React.useState([]);

  const [userZUID, setuserZUID] = React.useState('');
  const { setuserInfo } = useZestyStore((state) => state);

  const handleVerifySuccess = (res) => {
    setuserZUID(res.meta.userZuid);
  };

  const handleVerifyError = (res) => {
    console.log(res, 'err');
  };

  const handleGetUserSuccess = (res) => {
    setuserInfo(res?.data);
  };

  const handleGetUserError = (res) => {
    console.log(res, 'err');
  };

  const handleGetAllInvitesSuccess = (res) => {
    setinvites(res?.data);
  };

  const handleGetAllInvitesError = (res) => {
    console.log(res, 'err');
  };
  const verify = async () => {
    const res = await ZestyAPI.verify();
    !res.error && handleVerifySuccess(res);
    res.error && handleVerifyError(res);
  };

  const getUser = async (userZUID) => {
    const res = await ZestyAPI.getUser(userZUID);
    !res.error && handleGetUserSuccess(res);
    res.error && handleGetUserError(res);
  };

  const handleGetInstancesSuccess = (res) => {
    console.log(res);
    setInstances(res.data);
  };

  // Partial fix when invalid session is detected
  // will redirect user to home page
  const handleGetInstancesError = (res) => {
    console.log(res);
    if (res.error === 'invalid session') {
      setCookie('isAuthenticated', 'false');
    }
  };
  const getInstances = async () => {
    const res = await ZestyAPI.getInstances();
    !res.error && handleGetInstancesSuccess(res);
    res.error && handleGetInstancesError(res);
  };

  const getAllInvitedInstances = async () => {
    const res = await ZestyAPI.getAllInvitedInstances();
    !res.error && handleGetAllInvitesSuccess(res);
    res.error && handleGetAllInvitesError(res);
  };
  const handleChangeView = (e, value) => {
    if (value === null) setView(view);
    else setView(value);
  };

  const handleRoute = (zuid) => {
    setCookie('ZESTY_WORKING_INSTANCE', zuid);
    router.push({
      pathname: `/instances/${zuid}/`,
    });
  };
  const handleSearch = (search) => {
    setSearch(search.toLowerCase());
  };

  const handleUpdateUserSuccess = (res) => {
    console.log(res);
  };
  const handleUpdateUserError = (res) => {
    console.log(res);
  };
  const handleRespondToInviteSuccess = (res) => {
    console.log(res);
  };
  const handleRespondToInviteError = (res) => {
    console.log(res);
  };

  const toggleFavorites = async (data) => {
    setloading(true);
    const isExist = initialFavorites.find((e) => e === data.ZUID);
    const favorite_sites = [
      ...JSON.parse(userInfo.prefs).favorite_sites,
      data.ZUID,
    ];
    const filterdFavorite = initialFavorites.filter((e) => e !== data.ZUID);
    const prefs = JSON.parse(userInfo.prefs);
    prefs.favorite_sites = !isExist ? favorite_sites : filterdFavorite;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify(prefs),
    };
    const res = await ZestyAPI.updateUser(userInfo.ZUID, body, '');
    !res.error && handleUpdateUserSuccess(res);
    res.error && handleUpdateUserError(res);
    await getPageData();
  };

  const respondToInvite = async (data, action) => {
    const res = await ZestyAPI.respondToInvite(data.inviteZUID, action);
    !res.error && handleRespondToInviteSuccess(res);
    res.error && handleRespondToInviteError(res);
    await getPageData();
  };

  const favoritesList = instances
    ?.filter((instance) => initialFavorites.includes(instance.ZUID))
    ?.filter((inst) => inst?.name?.toLowerCase().includes(search));

  const instancesList = instances
    ?.filter((instance) => !initialFavorites.includes(instance.ZUID))
    ?.filter((inst) => inst?.name?.toLowerCase().includes(search));

  const getPageData = async () => {
    setloading(true);
    await getInstances();
    await getUser(userZUID);
    await getAllInvitedInstances();
    setloading(false);
  };

  React.useEffect(() => {
    verify();
  }, []);

  React.useEffect(() => {
    getPageData();
  }, []);

  React.useEffect(() => {
    userZUID && getUser(userZUID);
  }, [userZUID]);

  React.useEffect(() => {
    instances.length === 0 && getInstances();
  }, [instances]);

  React.useEffect(() => {
    if (orderByValue === 'asc') {
      setInstances(instances.sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (orderByValue === 'desc') {
      setInstances(instances.sort((a, b) => b.name.localeCompare(a.name)));
    }
    reset();
  }, [orderByValue]);

  React.useEffect(() => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      setinitialFavorites(JSON.parse(userInfo?.prefs)?.favorite_sites);
    }
  }, [userInfo]);

  return (
    <Container maxWidth={false} sx={{ my: 2 }}>
      <Stack
        alignItems={'center'}
        display={'flex'}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ height: '3.5rem' }}
        paddingBottom={{ xs: 15, sm: 0 }}
      >
        <TextField
          label="Search by instance name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          size="medium"
          variant="outlined"
          fullWidth
          color="secondary"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Box display="flex" gap={2} sx={{ height: { xs: 'auto', sm: '100%' } }}>
          <CustomMenu
            menuName="Order by"
            menuItems={orderByItems}
            handleClick={setOrderByValue}
          />
          <ToggleButtonGroup
            value={view}
            exclusive
            color="secondary"
            onChange={handleChangeView}
            sx={{ ml: 'auto', height: '100%' }}
          >
            <ToggleButton value="grid">
              <GridViewOutlinedIcon />
            </ToggleButton>
            <ToggleButton value="list">
              <FormatListBulletedOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <LaunchInstance
            onClick={() =>
              router.push('https://accounts.zesty.io/instances/create')
            }
          ></LaunchInstance>
        </Box>
      </Stack>

      <InstancesList
        title={
          <Typography
            gap={1}
            variant="h5"
            display={'flex'}
            alignItems={'center'}
          >
            <EmailIcon fontSize="large" color="secondary" /> Invites
          </Typography>
        }
        view={view}
        data={invites}
        toggleFavorites={toggleFavorites}
        handleRoute={handleRoute}
        initialFavorites={initialFavorites}
        loading={loading}
        invite={true}
        acceptInvite={respondToInvite}
        declineInvite={respondToInvite}
      />
      <InstancesList
        title={
          <Typography
            gap={1}
            variant="h5"
            display={'flex'}
            alignItems={'center'}
          >
            <StarIcon fontSize="large" color="secondary" /> Favorites
          </Typography>
        }
        view={view}
        data={favoritesList}
        toggleFavorites={toggleFavorites}
        handleRoute={handleRoute}
        initialFavorites={initialFavorites}
        loading={loading}
      />
      <InstancesList
        title={
          <Typography
            gap={1}
            variant="h5"
            display={'flex'}
            alignItems={'center'}
          >
            <WidgetsIcon fontSize="large" color="secondary" />
            Instances
          </Typography>
        }
        view={view}
        data={instancesList}
        toggleFavorites={toggleFavorites}
        handleRoute={handleRoute}
        initialFavorites={initialFavorites}
        loading={loading}
      />
    </Container>
  );
};
