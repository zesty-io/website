import React, { useState } from 'react';
import {
  Box,
  Typography,
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
  Container,
  Tabs,
  Tab,
  Stack,
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
    <List sx={{ padding: '0 8px 0 8px' }}>
      {lists.map((list, index) => (
        <ListItem
          title={list.label}
          key={index}
          onClick={() => handleChange(list.filename)}
          disablePadding
          selected={list.filename === currentPage}
          sx={(theme) => ({
            borderRadius: '5px',
            my: 0.2,
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
          <ListItemButton
            color="warning"
            sx={{ borderRadius: '5px', padding: '6px 12px' }}
          >
            <ListItemIcon sx={{ minWidth: 35 }}>{list.icon}</ListItemIcon>
            <ListItemText
              primary={<Typography variant="body3">{list.label}</Typography>}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
const profileTabs = [
  {
    icon: <InfoOutlinedIcon />,
    filename: '',
    label: 'Your Profile',
    sort: 2,
  },
  {
    icon: <LockIcon />,
    filename: 'security',
    label: 'Security',
    sort: 2,
  },
  {
    icon: <DataObject />,
    filename: 'preferences',
    label: 'Preferences',
    sort: 3,
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
      }}
    >
      {profileUrl ? (
        <Stack p={2}>
          <CardMedia
            component="img"
            height="100%"
            image={profileUrl}
            alt="screenshot"
            sx={{ boxShadow: 1, borderRadius: '8px' }}
          />
        </Stack>
      ) : (
        <Skeleton variant="rectangular" height="150px" />
      )}

      <CardContent sx={{ borderBottom: `1px solid ${grey[200]}` }}>
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
  const router = useRouter();

  const currentPage =
    router.pathname.split('/').length > 2 ? router.pathname.split('/')[2] : '';
  const { userInfo } = useZestyStore((state) => state);
  const [tabValue, setTabValue] = useState(currentPage);
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
        <Box sx={{ display: 'grid', gridTemplateColumns: '240px 1fr' }}>
          <Box
            sx={(theme) => ({
              position: 'sticky',
              top: `${theme.tabTop}px`,
              height: `calc(100vh - ${theme.tabTop}px)`,
              overflow: 'auto',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            })}
          >
            <ProfileHeader userInfo={userInfo} />
            <ProfileNavigation
              lists={profileTabs}
              handleChange={handleChange}
              currentPage={currentPage}
            />
          </Box>
          <Box>{children}</Box>
        </Box>
      ) : (
        <Container>
          <ProfileHeader userInfo={userInfo} />
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="icon position tabs example"
            indicatorColor="primary"
            textColor="primary"
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
              .map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  value={tab.filename}
                  iconPosition="start"
                  label={tab.label}
                  data-testid={tab.label}
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
