import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import { lang } from 'components/accounts/instances/lang';
import { profileTabs } from 'components/accounts/profile/tabs';
import { YourProfile } from 'components/accounts/profile/YourProfile';

const Index = ({ children }) => {
  const currentPage =
    location.pathname.split('/').length > 2
      ? location.pathname.split('/')[2]
      : '';
  const [tabValue, setTabValue] = React.useState(currentPage);
  const router = useRouter();
  const { instance } = useZestyStore((state) => state);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    router.push({
      pathname: `/profile/${newValue}/`,
    });
  };

  console.log(instance, 123);
  return (
    <Box>
      <InstanceHeader instance={instance} />
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
