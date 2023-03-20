import { Stack, Tab, Typography } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Database, Brain } from '@zesty-io/material';
import TabSchema from './TabSchema';
import React, { useState } from 'react';

const tabLists = [
  {
    name: 'Schema',
    icon: <Database sx={{ fontSize: '20px' }} />,
    component: <TabSchema />,
  },
  {
    name: 'Content',
    icon: <EditRoundedIcon sx={{ fontSize: '20px' }} />,
    component: 'Content',
  },
  {
    name: 'Media',
    icon: <ImageRoundedIcon sx={{ fontSize: '20px' }} />,
    component: 'Media',
  },
  {
    name: 'AI Assistant',
    icon: <Brain sx={{ fontSize: '20px' }} />,
    component: 'AI Assistant',
  },
  {
    name: 'Localization',
    icon: <TranslateRoundedIcon sx={{ fontSize: '20px' }} />,
    component: 'Localization',
  },
  {
    name: 'APIs',
    icon: <ApiRoundedIcon sx={{ fontSize: '20px' }} />,
    component: 'APIs',
  },
  {
    name: 'A/B Testing',
    icon: <ScienceRoundedIcon sx={{ fontSize: '20px' }} />,
    component: 'A/B Testing',
  },
];

const TabsSection = ({
  header = 'Enterprise grade features readily available for everyone',
}) => {
  const [value, setValue] = useState('Schema');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          px: 2,
          py: 4,
        },
        [theme.breakpoints.up('tablet')]: {
          px: 4,
          py: 6,
        },
        [theme.breakpoints.up('lg')]: {
          px: 3,
          py: 8,
        },
      })}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        mb={3}
        textAlign="center"
        width={{ lg: '640px', margin: '0 auto 24px auto' }}
        letterSpacing="-0.02em"
        sx={(theme) => ({
          [theme.breakpoints.up('tablet')]: {
            fontSize: '44px',
            lineHeight: '48px',
          },
        })}
      >
        {header}
      </Typography>

      <TabContext value={value}>
        <TabList
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          sx={{
            '.MuiTabs-flexContainer': {
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              padding: '8px',
            },
          }}
          onChange={handleChange}
        >
          {tabLists.map((tab) => (
            <Tab
              key={tab}
              label={tab.name}
              value={tab.name}
              iconPosition="start"
              icon={tab.icon}
              sx={{ textTransform: 'none' }}
            />
          ))}
        </TabList>

        {tabLists.map((tab) => (
          <TabPanel key={tab.name} sx={{ p: 0, pt: 3 }} value={tab.name}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </Stack>
  );
};

export default TabsSection;
