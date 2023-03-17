import { Stack, Tab, Typography } from '@mui/material';
import SchemaRoundedIcon from '@mui/icons-material/SchemaRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TabSchema from './TabSchema';

const tabLists = [
  {
    name: 'Schema',
    icon: <SchemaRoundedIcon />,
    component: <TabSchema />,
  },
  {
    name: 'Content',
    icon: <EditRoundedIcon />,
    component: 'Content',
  },
  {
    name: 'Media',
    icon: <ImageRoundedIcon />,
    component: 'Media',
  },
  {
    name: 'AI Assistant',
    icon: <PsychologyAltRoundedIcon />,
    component: 'AI Assistant',
  },
  {
    name: 'Localization',
    icon: <TranslateRoundedIcon />,
    component: 'Localization',
  },
  {
    name: 'APIs',
    icon: <ApiRoundedIcon />,
    component: 'APIs',
  },
  {
    name: 'A/B Testing',
    icon: <ScienceRoundedIcon />,
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
      })}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        mb={3}
        textAlign="center"
        width={{ lg: '640px', margin: '0 auto 24px auto' }}
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
              gap: '4px',
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
