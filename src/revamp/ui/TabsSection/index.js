import { Stack, Tab, Typography } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
// import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import { Database, Brain } from '@zesty-io/material/';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SchemaRoundedIcon from '@mui/icons-material/SchemaRounded';
import TabSection from './TabSection';
import React, { useState } from 'react';

const tabLists = [
  {
    name: 'Content',
    icon: <EditRoundedIcon sx={{ fontSize: '20px' }} />,
    component: (
      <TabSection
        header="Write content the way you feel best"
        lists={[
          'Customize content types to suit your needs',
          'Preview edits in real time with Duo Mode',
          'Easy organization and search for easy management',
        ]}
        image="https://storage.googleapis.com/assets.zesty.io/website/images/assets/Content App 2.png"
      />
    ),
  },
  {
    name: 'Schema',
    icon: <SchemaRoundedIcon sx={{ fontSize: '20px' }} />,
    component: (
      <TabSection
        header="Model content the way you want"
        lists={[
          'Create models for pages or headless content',
          '14+ field types including content relationships',
          'Field validation rules to ensure data quality',
        ]}
      />
    ),
  },
  {
    name: 'Media',
    icon: <ImageRoundedIcon sx={{ fontSize: '20px' }} />,
    component: (
      <TabSection
        header="All your media in one central place"
        lists={[
          'Manage pictures, gifs, video, documents, and more',
          'Automated image optimization and alt tags',
          'Programmatically modify image color, size, crop, and more instantly',
        ]}
        image="https://storage.googleapis.com/assets.zesty.io/website/images/assets/media.png"
      />
    ),
  },
  {
    name: 'AI Assistant',
    icon: <PsychologyRoundedIcon sx={{ fontSize: '20px' }} />,
    component: (
      <TabSection
        header="Up to 15X Faster Content Production with AI"
        lists={[
          'Write virtually anything using our ChatGPT powered AI assistant',
          'Regenerate and refine content as needed',
          'Preview AI created content instantly',
        ]}
        image="https://storage.googleapis.com/assets.zesty.io/website/images/assets/AI Generator.png"
      />
    ),
  },
  {
    name: 'Localization',
    icon: <TranslateRoundedIcon sx={{ fontSize: '20px' }} />,
    component: (
      <TabSection
        header="Reach your audience in any language"
        lists={[
          'Over 100+ locales supported',
          'Use API or manual translation services',
          'Manage SEO metadata in multiple languages',
        ]}
        image="https://storage.googleapis.com/assets.zesty.io/website/images/assets/Localization.png"
      />
    ),
  },
  // {
  //   name: 'APIs',
  //   icon: <ApiRoundedIcon sx={{ fontSize: '20px' }} />,
  //   component: <TabSection header="APIs" />,
  // },
  {
    name: 'A/B Testing',
    icon: <ScienceRoundedIcon sx={{ fontSize: '20px' }} />,
    component: (
      <TabSection
        header="Increase conversions with A/B Testing"
        lists={[
          'Create multivariate testing out-of-the-box',
          'A/B test content on webpages, apps, and more',
          'Integrate with your existing analytics provider',
        ]}
        image="https://storage.googleapis.com/assets.zesty.io/website/images/assets/AB Testing.png"
      />
    ),
  },
];

const TabsSection = ({
  header = 'Enterprise grade features  available for everyone out-of-the-box',
}) => {
  const [value, setValue] = useState('Content');

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
        [theme.breakpoints.up('xl')]: {
          mx: 'auto',
          maxWidth: theme.maxWidth,
        },
      })}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        mb={3}
        textAlign="center"
        width={{ lg: '553px', margin: '0 auto 24px auto' }}
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
              sx={{
                textTransform: 'none',
                color: 'text.secondary',
              }}
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
