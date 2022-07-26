import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import { profileTabs } from 'components/accounts/profile/tabs';
import { hashMD5 } from 'utils/Md5Hash';

const ProfileHeader = ({ userInfo }) => {
  const { email, firstName, lastName } = userInfo || '';
  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  const name = `${firstName || ''} ${lastName || ''}` || '';
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
      paddingX={4}
      paddingY={4}
    >
      <Box>
        <img src={profileUrl} alt="" width={100} height={100} />
      </Box>
      <Box>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="p">{email}</Typography>
      </Box>
    </Box>
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
export const ProfileApp = React.memo(Index);
