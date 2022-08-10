import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import {
  Box,
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
} from '@mui/material';
import { setCookie } from 'cookies-next';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const testarr = [
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
  {
    ZUID: '8-45a294a-btwkv9',
    name: '! DEV Parsley',
    screenshotURL:
      'https://storage.googleapis.com/zesty-prod-instance-screenshots/parsley.zesty.io_1920_1080._400_200.png',
    updatedAt: '2022-06-24T13:30:49Z',
  },
];

export const InstancesDashboard = () => {
  const [view, setView] = useState('grid');
  const router = useRouter();
  const { ZestyAPI } = useZestyStore((state) => state);

  const [instances, setInstances] = React.useState([]);
  const [search, setSearch] = React.useState('');

  async function getInstances() {
    let instances = await ZestyAPI.getInstances();
    setInstances(instances?.data ? instances.data : []);
  }

  const handleChangeView = (e, value) => {
    setView(value);
  };

  React.useEffect(() => {
    instances.length === 0 && getInstances();
  }, [instances]);

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
    <Box py={3}>
      <Stack direction="row" spacing={2}>
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
      </Stack>

      <Stack mt={2} direction="row" spacing={2}>
        <ToggleButtonGroup
          value={view}
          exclusive
          color="secondary"
          onChange={handleChangeView}
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
          testarr
            .filter((inst) => inst?.name?.toLowerCase().includes(search))
            .map((instance, index) => (
              <Grid item xs={12} sm={4} lg={3} key={index}>
                <Card sx={{ cursor: 'pointer' }}>
                  <CardMedia
                    height="100%"
                    width="100%"
                    component="img"
                    image={instance.screenshotURL}
                    onClick={() => handleRoute(instance.ZUID)}
                  />
                  <Typography p={1} gutterBottom variant="h6">
                    {instance.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
      </Grid>

      {view === 'list' && (
        <List>
          {testarr
            .filter((inst) => inst?.name?.toLowerCase().includes(search))
            .map((instance, index) => (
              <ListItem divider key={index} disablePadding>
                <ListItemButton onClick={() => handleRoute(instance.ZUID)}>
                  <ListItemIcon>
                    <img
                      height="50px"
                      width="50px"
                      src={instance.screenshotURL}
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
    </Box>
  );
};
