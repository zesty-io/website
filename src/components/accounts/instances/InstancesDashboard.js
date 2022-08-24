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
} from '@mui/material';
import { setCookie } from 'cookies-next';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CustomMenu from './CustomMenu';
import useDropdown from 'components/hooks/useDropdown';
import FillerContent from 'components/globals/FillerContent';

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
  const router = useRouter();
  const { ZestyAPI } = useZestyStore((state) => state);

  const [instances, setInstances] = React.useState([]);
  const [search, setSearch] = React.useState('');

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
    const res = await ZestyAPI.getInstances();
    !res.error && handleGetInstancesSuccess(res);
    res.error && handleGetInstancesError(res);
  }

  const handleChangeView = (e, value) => {
    if (value === null) setView(view);
    else setView(value);
  };

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

  const handleRoute = (zuid) => {
    setCookie('ZESTY_WORKING_INSTANCE', zuid);
    router.push({
      pathname: `/instances/${zuid}/`,
    });
  };
  const handleSearch = (search) => {
    setSearch(search.toLowerCase());
  };

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

      <Grid container direction="row" my={2} spacing={2}>
        {view === 'grid' &&
          instances
            ?.filter((inst) => inst?.name?.toLowerCase().includes(search))
            ?.map((instance, index) => (
              <Grid item xs={12} sm={4} lg={3} key={index}>
                <Card sx={{ cursor: 'pointer', minHeight: '100%' }}>
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
            ))}
      </Grid>

      {view === 'list' && (
        <List>
          {instances
            ?.filter((inst) => inst?.name?.toLowerCase().includes(search))
            ?.map((instance, index) => (
              <ListItem divider key={index} disablePadding>
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
            ))}
        </List>
      )}
    </Container>
  );
};
