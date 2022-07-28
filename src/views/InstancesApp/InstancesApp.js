import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import { instanceTabs } from 'components/accounts/instances/tabs';
import { lang } from 'components/accounts/instances/lang';

const Index = ({ children }) => {
  const langcode = 'en';
  const currentPage =
    location.pathname.split('/').length > 2
      ? location.pathname.split('/')[3]
      : '';
  const [tabValue, setTabValue] = React.useState(currentPage);
  const router = useRouter();
  const { ZestyAPI, instance, setInstance } = useZestyStore((state) => state);
  const { zuid } = router.query;

  const handleChange = (event, newValue) => {
    console.log(event);
    setTabValue(newValue);
    // router.push({
    //   pathname: `/instances/[zuid]/${newValue}/`,
    //   query: { zuid },
    // });
  };

  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    setInstance(res.data);
  };

  React.useEffect(() => {
    getInstance();
  }, []);

  React.useEffect(() => {
    document.title =
      instance.name + ` Instance - ${currentPage} - Zesty.io Console`;
  }, [instance, currentPage]);

  return (
    <Box>
      <InstanceHeader instance={instance} />
      {currentPage}
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        {instanceTabs
          .sort((a, b) => a.sort - b.sort)
          .map((tab) => (
            <Tab
              href={`/instances/${zuid}/${tab.filename}/`}
              icon={tab.icon}
              value={tab.filename}
              iconPosition="start"
              label={lang[langcode].tabs[tab.filename]}
            />
          ))}
      </Tabs>
      {tabValue == '' ? <InstanceOverview /> : children}
      {/* {children} */}
    </Box>
  );
};
export const InstancesApp = React.memo(Index);
