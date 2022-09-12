import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Skeleton,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  lighten,
  Divider,
  capitalize,
  Container,
  Tabs,
  Tab,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { hashMD5 } from 'utils/Md5Hash';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DataObject from '@mui/icons-material/DataObject';
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProfileNavigation = ({ lists, handleChange, currentPage = '' }) => {
  return (
    <Box>
      <List>
        {lists.map((list, index) => (
          <ListItem
            key={index}
            onClick={() => handleChange(list.filename)}
            disablePadding
            selected={list.filename === currentPage}
            sx={(theme) => ({
              mb: 1,
              borderRadius: '4px',
              '&.Mui-selected': {
                ' .MuiListItemIcon-root': {
                  color: theme.palette.secondary.main,
                },
                bgcolor: lighten(theme.palette.secondary.light, 0.9),
                color: theme.palette.secondary.main,
                pointerEvents: 'none',
              },
            })}
          >
            <ListItemButton color="warning">
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
const profileTabs = [
  {
    icon: <InfoOutlinedIcon />,
    filename: '',
    label: 'Your Profile',
    sort: 0,
  },
  {
    icon: <LockIcon />,
    filename: 'security',
    label: 'Security',
    sort: 2,
  },
  {
    icon: <DataObject />,
    filename: 'preference',
    label: 'Preferences',
    sort: 4,
  },
];

const ProfileHeader = ({ userInfo }) => {
  const { email, firstName, lastName } = userInfo || '';
  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  const name = `${firstName || ''} ${lastName || ''}` || '';
  return (
    <Card
      sx={{
        maxWidth: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: `1px solid ${grey[300]}`,
      }}
    >
      {profileUrl ? (
        <CardMedia
          component="img"
          height="100%"
          sx={{ p: 5 }}
          image={profileUrl}
          alt="screenshot"
        />
      ) : (
        <Skeleton variant="rectangular" height="150px" />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

const Index = ({ children }) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('md'));
  const { userInfo } = useZestyStore((state) => state);
  const currentPage =
    location.pathname.split('/').length > 2
      ? location.pathname.split('/')[2]
      : '';
  const [tabValue, setTabValue] = useState(currentPage);
  const router = useRouter();

  const handleChange = (newValue) => {
    setTabValue(newValue);
    router.push({
      pathname: `/profile/${newValue}/`,
    });
  };

  const handleTabChange = (event, newValue) => {
    handleChange(newValue);
  };

  return (
    <Box>
      {isLG ? (
        <Grid container>
          <Grid
            item
            md={3}
            lg={2}
            sx={{
              borderRight: `1px solid ${grey[300]}`,
              maxWidth: { md: '384px' },
              position: 'sticky',
              top: '60px',
              height: `calc(100vh - 82px)`,
              overflow: 'auto',
            }}
          >
            <ProfileHeader userInfo={userInfo} />
            <ProfileNavigation
              lists={profileTabs}
              handleChange={handleChange}
              currentPage={currentPage}
            />
          </Grid>

          <Grid item md={9} lg={10}>
            <Container maxWidth={false}>
              <Typography py={2} variant="h5" color="text.secondary">
                {currentPage ? capitalize(currentPage) : 'Overview'}
              </Typography>
            </Container>
            <Divider sx={{ mb: 2 }} />
            <Container maxWidth={false}>{children}</Container>
          </Grid>
        </Grid>
      ) : (
        <Container>
          <ProfileHeader userInfo={userInfo} />
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="icon position tabs example"
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTabs-scrollButtons.Mui-disabled': {
                opacity: 0.3,
              },
              mb: 2,
            }}
          >
            {profileTabs
              .sort((a, b) => a.sort - b.sort)
              .map((tab) => (
                <Tab
                  icon={tab.icon}
                  value={tab.filename}
                  iconPosition="start"
                  label={tab.label}
                />
              ))}
          </Tabs>
          {children}
        </Container>
      )}
    </Box>
  );
};

export const ProfileApp = React.memo(Index);
