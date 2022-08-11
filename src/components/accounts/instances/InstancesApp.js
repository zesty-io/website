import React from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  lighten,
  Typography,
  Divider,
  Tabs,
  Tab,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceOverview from 'components/accounts/instances/InstanceOverview';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import { instanceTabs } from 'components/accounts/instances/tabs';
import { lang } from 'components/accounts/instances/lang';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

let capitalize = (s) => (s = s.charAt(0).toUpperCase() + s.slice(1));

const Index = ({ children }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('md'));
  const langcode = 'en';
  const currentPage =
    location.pathname.split('/').length > 2
      ? location.pathname.split('/')[3]
      : '';
  const [tabValue, setTabValue] = React.useState(currentPage);
  const router = useRouter();
  const { ZestyAPI, instance, setInstance } = useZestyStore((state) => state);
  const { zuid } = router.query;

  const handleChange = (newValue) => {
    setTabValue(newValue);
    //this will avoid error in the console
    if (newValue) {
      router.push({
        pathname: `/instances/[zuid]/${newValue}/`,
        query: { zuid },
      });
    } else {
      router.push({
        pathname: `/instances/[zuid]`,
        query: { zuid },
      });
    }
  };

  const handleTabChange = (event, newValue) => {
    handleChange(newValue);
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
    <Box my={2}>
      {!isSM ? (
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            sx={{
              borderRight: `1px solid ${grey[300]}`,
              px: 1,
            }}
          >
            <InstanceHeader instance={instance} />
            <InstanceNavigation
              lists={instanceTabs}
              handleChange={handleChange}
              currentPage={currentPage}
              langcode={langcode}
            />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4" color="secondary">
              {currentPage ? capitalize(currentPage) : 'Overview'}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {tabValue == '' ? <InstanceOverview /> : children}
          </Grid>
        </Grid>
      ) : (
        <>
          <InstanceHeader instance={instance} />
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="icon position tabs example"
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTabs-scrollButtons.Mui-disabled': {
                opacity: 0.3,
              },
              mb: 2,
            }}
          >
            {instanceTabs
              .sort((a, b) => a.sort - b.sort)
              .map((tab) => (
                <Tab
                  icon={tab.icon}
                  value={tab.filename}
                  iconPosition="start"
                  label={lang[langcode].tabs[tab.filename]}
                />
              ))}
          </Tabs>
          {tabValue == '' ? <InstanceOverview /> : children}
        </>
      )}
    </Box>
  );
};

function InstanceNavigation({ lists, handleChange, currentPage, langcode }) {
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
              <ListItemText primary={lang[langcode].tabs[list.filename]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export const InstancesApp = React.memo(Index);
