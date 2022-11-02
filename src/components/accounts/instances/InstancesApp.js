import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  lighten,
  Tabs,
  Tab,
  Container,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import InstanceHeader from 'components/accounts/instances/InstanceHeader';
import { instanceTabs } from 'components/accounts/instances/tabs';
import { lang } from 'components/accounts/instances/lang';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

// let capitalize = (s) => (s = s.charAt(0).toUpperCase() + s.slice(1));

const Index = ({ children }) => {
  const [loading, setloading] = React.useState(false);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('md'));
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
    setloading(true);
    const res = await ZestyAPI.getInstance(zuid);
    setInstance(res.data);
    setloading(false);
  };

  React.useEffect(() => {
    if (router.isReady) {
      getInstance();
    }
  }, [router.isReady]);

  const title =
    instance?.name ||
    'Loading' + ` Instance - ${currentPage} - Zesty.io Console`;

  return (
    <Box>
      <ZestyAccountsHead title={title} />
      {isLG ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: '240px 1fr' }}>
          <Box
            sx={(theme) => ({
              position: 'sticky',
              top: `${theme.tabTop}px`,
              height: `calc(100vh - ${theme.tabTop}px)`,
              overflow: 'auto',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            })}
          >
            <InstanceHeader
              ZestyAPI={ZestyAPI}
              instance={instance}
              loading={loading}
            />
            <InstanceNavigation
              lists={instanceTabs}
              handleChange={handleChange}
              currentPage={currentPage}
              langcode={langcode}
            />
          </Box>
          <Box>{children}</Box>
        </Box>
      ) : (
        <Container>
          <InstanceHeader ZestyAPI={ZestyAPI} instance={instance} />
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="icon position tabs example"
            indicatorColor="primary"
            textColor="primary"
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
              .map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  value={tab.filename}
                  iconPosition="start"
                  label={lang[langcode].tabs[tab.filename]}
                />
              ))}
          </Tabs>
          {children}
        </Container>
      )}
    </Box>
  );
};

function InstanceNavigation({ lists, handleChange, currentPage, langcode }) {
  return (
    <List sx={{ padding: '0 8px 0 8px' }}>
      {lists.map((list, index) => (
        <ListItem
          title={lang[langcode].tabs[list.filename]}
          key={index}
          onClick={() => handleChange(list.filename)}
          disablePadding
          selected={list.filename === currentPage}
          sx={(theme) => ({
            borderRadius: '5px',
            my: 0.2,
            color: theme.palette.text.secondary,
            '&.Mui-selected': {
              ' .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
              },
              bgcolor: lighten(theme.palette.primary.light, 0.9),
              pointerEvents: 'none',
              color: theme.palette.primary.main,
            },
          })}
        >
          <ListItemButton
            color="warning"
            sx={{ borderRadius: '5px', padding: '6px 12px' }}
          >
            <ListItemIcon sx={{ minWidth: 35 }}>{list.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body3">
                  {lang[langcode].tabs[list.filename]}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
export const InstancesApp = React.memo(Index);
