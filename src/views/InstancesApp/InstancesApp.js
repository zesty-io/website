import React from 'react';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import { instanceTabs } from 'components/accounts/instances/tabs';
import { lang } from 'components/accounts/instances/lang';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

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
      <Grid container>
        <Grid item>
          <InstanceHeader instance={instance} />
          <InstanceNavigation />
        </Grid>
        <Grid item></Grid>
      </Grid>
      
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


function InstanceNavigation() {
  return (<List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Nested List Items
      </ListSubheader>
    }
  > <ListItemButton>
    <ListItemIcon>
      <SendIcon />
    </ListItemIcon>
    <ListItemText primary="Sent mail" />
  </ListItemButton>
  </List>);
}
export const InstancesApp = React.memo(Index);
