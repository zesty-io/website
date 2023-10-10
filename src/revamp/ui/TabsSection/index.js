import { Stack, Tab, Typography } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { TabContext, TabList } from '@mui/lab';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SchemaRoundedIcon from '@mui/icons-material/SchemaRounded';
import TabSection from './TabSection';
import React, { useEffect, useState } from 'react';

const tabLists = [
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
        image="https://kfg6bckb.media.zestyio.com/AB-Testing.webp?width=1050&height=782"
      />
    ),
  },
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
        image="https://kfg6bckb.media.zestyio.com/Content-App-2.webp?width=1280&height=720"
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
        image="https://kfg6bckb.media.zestyio.com/media.webp?width=800&height=600"
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
        image="https://kfg6bckb.media.zestyio.com/AI-Generator.webp?width=900&height=600"
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
        image="https://kfg6bckb.media.zestyio.com/Localization.webp?width=1280&height=720"
      />
    ),
  },
  // {
  //   name: 'APIs',
  //   icon: <ApiRoundedIcon sx={{ fontSize: '20px' }} />,
  //   component: <TabSection header="APIs" />,
  // },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {children}
    </Typography>
  );
}

const TabsSection = ({
  header = 'Personalization, A/B Testing, Integrated Analytics, Any Business Configuration',
}) => {
  const [value, setValue] = useState('Content');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const currentIndex = tabLists.findIndex(
          (tab) => tab.name === prevValue,
        );
        const nextIndex = (currentIndex + 1) % tabLists.length;
        return tabLists[nextIndex].name;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [tabLists]);

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
        width={{ lg: '800px', margin: '0 auto 24px auto' }}
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
              aria-selected={value === tab.name}
              role="tab"
              aria-controls={tab.name || 'Zesty image'}
              key={tab.name}
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
          <TabPanel
            key={tab.name}
            sx={{ p: 0, pt: 3 }}
            value={value}
            index={tab.name}
          >
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </Stack>
  );
};

export default TabsSection;
