import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PhishingIcon from '@mui/icons-material/Phishing';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoIcon from '@mui/icons-material/Info';

import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import { DataObject, FolderShared, Public } from '@mui/icons-material';

export const InstancesApp = ({ children }) => {
  const [tabValue, setTabValue] = React.useState('');
  const [instance, setinstance] = React.useState();
  const router = useRouter();
  const { workingInstance, ZestyAPI } = useZestyStore((state) => state);
  const { zuid, data } = router.query;

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    router.push({
      pathname: `/instances/[zuid]/${newValue}/`,
      query: { zuid },
    });
  };

  const getinstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    console.log(res.data);
    setinstance(res.data);
  };
  React.useEffect(() => {
    getinstance();
  }, []);

  React.useEffect(() => {
    console.log(instance, 2222);
  }, [instance]);
  return (
    <Box>
      <InstanceHeader instance={instance} />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab
          icon={<InfoIcon />}
          value={''}
          iconPosition="start"
          label="Overview"
        />

        <Tab
          icon={<GroupAddIcon />}
          value={'users'}
          iconPosition="start"
          label="Users"
        />
        <Tab
          icon={<FolderShared />}
          value={'teams'}
          iconPosition="start"
          label="Teams"
        />
        <Tab
          icon={<Public />}
          value={'domains'}
          iconPosition="start"
          label="Domains"
        />
        <Tab
          icon={<DataObject />}
          value={'apis'}
          iconPosition="start"
          label="APIs"
        />
        <Tab
          icon={<PhishingIcon />}
          value={'webhooks'}
          iconPosition="start"
          label="Webhooks"
        />
      </Tabs>
      {tabValue == '' ? <InstanceOverview /> : children}
    </Box>
  );
};
