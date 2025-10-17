import { Button, Stack, Typography, useScrollTrigger } from '@mui/material';
import { TabContext } from '@mui/lab';
import React, { memo, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import {
  EditRounded as EditRoundedIcon,
  ImageRounded as ImageRoundedIcon,
  TranslateRounded as TranslateRoundedIcon,
  ScienceRounded as ScienceRoundedIcon,
  PsychologyRounded as PsychologyRoundedIcon,
  SchemaRounded as SchemaRoundedIcon,
  TimelineRounded as TimelineRounded,
} from '@mui/icons-material';

const TabSection = dynamic(() => import('./TabSection'), { ssr: false });

const icons = [
  {
    name: 'ScienceRoundedIcon',
    icon: <ScienceRoundedIcon sx={{ fontSize: '20px' }} />,
  },
  {
    name: 'EditRoundedIcon',
    icon: <EditRoundedIcon sx={{ fontSize: '20px' }} />,
  },
  {
    name: 'SchemaRoundedIcon',
    icon: <SchemaRoundedIcon sx={{ fontSize: '20px' }} />,
  },
  {
    name: 'ImageRoundedIcon',
    icon: <ImageRoundedIcon sx={{ fontSize: '20px' }} />,
  },
  {
    name: 'PsychologyRoundedIcon',
    icon: <PsychologyRoundedIcon sx={{ fontSize: '20px' }} />,
  },
  {
    name: 'TranslateRoundedIcon',
    icon: <TranslateRoundedIcon sx={{ fontSize: '20px' }} />,
  },
  {
    name: 'TimelineRounded',
    icon: <TimelineRounded sx={{ fontSize: '20px' }} />,
  },
];

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
        image="https://kfg6bckb.media.zestyio.com/Content-App-2.webp?width=1280&height=720&&quality=40"
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
  tabs,
}) => {
  const [value, setValue] = useState('A/B Testing');
  const [list, setList] = useState(tabLists);

  useEffect(() => {
    if (tabs) {
      setList(
        tabs?.data?.map((tab) => {
          const regex = /<li>(.*?)<\/li>/g;
          const liTextArray = [];

          // Use a loop to iterate through matches and extract the text content
          let match;
          while ((match = regex.exec(tab.lists)) !== null) {
            liTextArray.push(match[1]);
          }

          const tabSectionProps = {
            header: tab?.header,
            lists: liTextArray,
            image: tab?.image?.data[0]?.url,
            primaryBtn: tab?.cta_text,
            primaryBtnLink: tab?.cta_link,
          };
          return {
            name: tab.name,
            icon: icons?.find((icon) => icon.name === tab.feature_icon)?.icon,
            component: <TabSection {...tabSectionProps} />,
          };
        }),
      );
    }
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (trigger) {
        setValue((prevValue) => {
          const currentIndex = list?.findIndex((tab) => tab.name === prevValue);
          const nextIndex = (currentIndex + 1) % list?.length;
          return list[nextIndex]?.name;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [list, trigger]);

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

      <Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            justifyItems: 'center',
            flexWrap: 'wrap',
            my: 1,
          }}
        >
          {list.map((e, index) => {
            const isActive = e.name === value;
            return (
              <Stack key={index} mx={'8px'}>
                <Button
                  title={e.name}
                  sx={{
                    borderRadius: '8px',
                    color: isActive ? '#FE5D08' : '#9FA3A9',
                    bgcolor: isActive ? '#FEF5ED' : '#fff',
                    py: '8px',
                    px: '14px',
                  }}
                  startIcon={e.icon}
                  onClick={() => {
                    setValue(e.name);
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: isActive ? '#FE5D08' : '#333333',
                    }}
                  >
                    {e.name}
                  </Typography>
                </Button>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <TabContext value={value}>
        {list?.map((tab) => (
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

export default memo(TabsSection);
