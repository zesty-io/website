import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import {
  Card,
  CardMedia,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  Box,
} from '@mui/material';
import { setCookie } from 'cookies-next';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CustomMenu from './CustomMenu';
import useDropdown from 'components/hooks/useDropdown';
import FillerContent from 'components/globals/FillerContent';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { InstanceLoading } from '../ui';

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

const InstancesList = ({
  title = '',
  data = [],
  view = 'grid',
  toggleFavorites,
  handleRoute,
  initialFavorites = [],
  loading = false,
}) => {
  if (loading) {
    return <InstanceLoading view={view} />;
  }
  if (view === 'list') {
    return (
      <List>
        {data.length !== 0 && <Typography variant="h5">{title}</Typography>}
        {data?.map((instance, index) => {
          const isFavorite = initialFavorites.find((e) => e === instance.ZUID);

          return (
            <ListItem divider key={index} disablePadding>
              <Box onClick={() => toggleFavorites(instance)}>
                {isFavorite ? <GradeIcon /> : <StarOutlineIcon />}
              </Box>
              <ListItemButton onClick={() => handleRoute(instance.ZUID)}>
                <ListItemIcon>
                  <img
                    alt={instance.name}
                    height="50px"
                    width="50px"
                    src={
                      instance.screenshotURL
                        ? instance.screenshotURL
                        : FillerContent.image
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={instance.name}
                  secondary={`Updated ${instance.updatedAt}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return (
    <Box paddingY={2}>
      {data.length !== 0 && <Typography variant="h5">{title}</Typography>}
      <Grid container direction="row" my={2} spacing={2}>
        {data?.map((instance, index) => {
          const isFavorite = initialFavorites.find((e) => e === instance.ZUID);
          return (
            <Grid item xs={12} sm={4} lg={3} key={index}>
              <Card sx={{ cursor: 'pointer', minHeight: '100%' }}>
                <Box
                  paddingX={1}
                  paddingY={1}
                  width={1}
                  display={'flex'}
                  justifyContent={'flex-end'}
                >
                  <Box onClick={() => toggleFavorites(instance)}>
                    {isFavorite ? <GradeIcon /> : <StarOutlineIcon />}
                  </Box>
                </Box>
                <CardMedia
                  height="100%"
                  sx={{ minHeight: 170 }}
                  width="100%"
                  component="img"
                  image={
                    instance.screenshotURL
                      ? instance.screenshotURL
                      : FillerContent.image
                  }
                  onClick={() => handleRoute(instance.ZUID)}
                />
                <Typography
                  p={1}
                  gutterBottom
                  variant="h6"
                  onClick={() => handleRoute(instance.ZUID)}
                >
                  {instance.name}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const InstancesDashboard = () => {
  const [view, setView] = useState('grid');
  const [orderByValue, setOrderByValue, reset] = useDropdown();
  const [initialFavorites, setinitialFavorites] = useState([]);
  const router = useRouter();
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [instances, setInstances] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [loading, setloading] = React.useState(false);

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

  const verify = async () => {
    const res = await ZestyAPI.verify();
    !res.error && handleVerifySuccess(res);
    res.error && handleVerifyError(res);
  };

  const getUser = async (userZUID) => {
    setloading(true);
    const res = await ZestyAPI.getUser(userZUID);
    !res.error && handleGetUserSuccess(res);
    res.error && handleGetUserError(res);
    setloading(false);
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
  async function getInstances() {
    setloading(true);
    const res = await ZestyAPI.getInstances();
    !res.error && handleGetInstancesSuccess(res);
    res.error && handleGetInstancesError(res);
    setloading(false);
  }

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
    await getInstances();
    await getUser(userZUID);
    await setloading(false);
  };

  const favoritesList = instances
    ?.filter((instance) => initialFavorites.includes(instance.ZUID))
    ?.filter((inst) => inst?.name?.toLowerCase().includes(search));

  const instancesList = instances
    ?.filter((instance) => !initialFavorites.includes(instance.ZUID))
    ?.filter((inst) => inst?.name?.toLowerCase().includes(search));

  React.useEffect(() => {
    verify();
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
      <Stack alignItems={'center'} direction="row" spacing={2}>
        <TextField
          label="Search by instance name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
          color="secondary"
          onChange={(e) => handleSearch(e.target.value)}
        />
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
          sx={{ ml: 'auto' }}
        >
          <ToggleButton value="grid">
            <GridViewOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="list">
            <FormatListBulletedOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <InstancesList
        title={'Favorites'}
        view={view}
        data={favoritesList}
        toggleFavorites={toggleFavorites}
        handleRoute={handleRoute}
        initialFavorites={initialFavorites}
        loading={loading}
      />
      <InstancesList
        title={'Instances'}
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
