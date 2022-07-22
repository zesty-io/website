import React from 'react';
import { Tabs, Tab, Box } from '@mui/material'
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PhishingIcon from '@mui/icons-material/Phishing';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoIcon from '@mui/icons-material/Info';

import { useRouter } from 'next/router'
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';

export const InstancesApp = ({children}) => {
  const [tabValue, setTabValue] = React.useState('');
  const router = useRouter();
  const { workingInstance } = useZestyStore((state) => state);
  const { zuid } = router.query


  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    router.push(
      {
        pathname: `/instances/[zuid]/${newValue}/`,
        query: { zuid: zuid },
      }
    );
  };

  return (
  <Box>
    <InstanceHeader/>
    <Tabs
      value={tabValue}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<InfoIcon />} value={''} iconPosition="start" label="Overview" />
      
      <Tab icon={<GroupAddIcon />} value={'users'} iconPosition="start" label="User" />
      <Tab icon={<PhishingIcon />} value={'webhooks'} iconPosition="start" label="Webhooks" />
    </Tabs>
    {tabValue == '' && <InstanceOverview /> || children}
    

  </Box>);
};
