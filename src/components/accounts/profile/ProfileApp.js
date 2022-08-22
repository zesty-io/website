import React from 'react';
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
} from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { hashMD5 } from 'utils/Md5Hash';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DataObject from '@mui/icons-material/DataObject';
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';

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
    <Card sx={{ maxWidth: '100%' }}>
      {profileUrl ? (
        <CardMedia
          component="img"
          height="100%"
          sx={{ padding: '5rem' }}
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
  const { userInfo } = useZestyStore((state) => state);
  const currentPage =
    location.pathname.split('/').length > 2
      ? location.pathname.split('/')[2]
      : '';
  const router = useRouter();

  const handleChange = (newValue) => {
    router.push({
      pathname: `/profile/${newValue}/`,
    });
  };

  return (
    <Box my={2}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          sx={{
            borderRight: `1px solid ${grey[300]}`,
            px: 1,
          }}
        >
          <ProfileHeader userInfo={userInfo} />
          <ProfileNavigation
            lists={profileTabs}
            handleChange={handleChange}
            currentPage={currentPage}
          />
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h4" color="secondary">
            {currentPage ? capitalize(currentPage) : 'Overview'}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export const ProfileApp = React.memo(Index);
