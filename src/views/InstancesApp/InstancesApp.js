import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PhishingIcon from '@mui/icons-material/Phishing';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import {
  DataObject,
  FolderShared,
  Public,
  Settings,
} from '@mui/icons-material';

const switchTabs = (setTabValue) => {
  if (location.pathname.includes('users')) {
    setTabValue('users');
  } else if (location.pathname.includes('teams')) {
    setTabValue('teams');
  } else if (location.pathname.includes('domains')) {
    setTabValue('domains');
  } else if (location.pathname.includes('apis')) {
    setTabValue('apis');
  } else if (location.pathname.includes('webhooks')) {
    setTabValue('webhooks');
  } else {
    setTabValue('');
  }
};

const Index = ({ children }) => {
  const [tabValue, setTabValue] = React.useState('');
  const router = useRouter();
  const { ZestyAPI, instance, setinstance } = useZestyStore((state) => state);
  const { zuid } = router.query;

  const handleChange = (event, newValue) => {
    router.push({
      pathname: `/instances/[zuid]/${newValue}/`,
      query: { zuid },
    });
  };

  const getinstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    setinstance(res.data);
  };

  React.useEffect(() => {
    Object.keys(instance)?.length === 0 && getinstance();
  }, [instance]);

  React.useEffect(() => {
    switchTabs(setTabValue);
  }, [location.pathname]);
  return (
    <Box>
      <InstanceHeader instance={instance} />
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab
          icon={<InfoOutlinedIcon />}
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
          label="API &amp; Tokens"
        />
        <Tab
          icon={<PhishingIcon />}
          value={'webhooks'}
          iconPosition="start"
          label="Webhooks"
        />
        <Tab
          icon={<CreditCardOutlinedIcon />}
          value={'billing'}
          iconPosition="start"
          label="Billing &amp; Plan"
        />
        <Tab
          icon={<SettingsIcon />}
          value={'settings'}
          iconPosition="start"
          label="Settings"
        />
      </Tabs>
      {tabValue == '' ? <InstanceOverview /> : children}
    </Box>
  );
};
export const InstancesApp = React.memo(Index);
