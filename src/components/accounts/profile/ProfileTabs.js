import React from 'react';
import { Tabs, Tab, Box, Typography, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { hashMD5 } from 'utils/Md5Hash';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DataObject from '@mui/icons-material/DataObject';
import LockIcon from '@mui/icons-material/Lock';

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
    <Grid container gap={3} paddingY={2}>
      <Grid item>
        <img src={profileUrl} alt="" width={100} height={100} />
      </Grid>
      <Grid item>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="p">{email}</Typography>
      </Grid>
    </Grid>
  );
};
const Index = ({ children }) => {
  const { userInfo } = useZestyStore((state) => state);
  const currentPage =
    location.pathname.split('/').length > 2
      ? location.pathname.split('/')[2]
      : '';
  const [tabValue, setTabValue] = React.useState(currentPage);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    router.push({
      pathname: `/profile/${newValue}/`,
    });
  };

  return (
    <Box>
      <ProfileHeader userInfo={userInfo} />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="icon position tabs example"
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
    </Box>
  );
};
export const ProfileTabs = React.memo(Index);
