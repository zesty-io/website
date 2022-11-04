import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiMarkdown from 'markdown-to-jsx';
import Container from 'blocks/container/Container';
import FillerContent from 'components/globals/FillerContent';

const mock = [
  {
    title: 'Google Drive',
    subtitle:
      'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
  },
  {
    title: 'Google Ad Manager',
    subtitle:
      'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
  },
  {
    title: 'Atlassian',
    subtitle:
      'Keep your entire team in sync with development and easily manage tasks, goals, and deadlines. Easily manage and edit any Adwords campaign inline to improve ROI with constant review.',
    icon: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
  },
];

const WithDarkBackgroundAndSimpleDescriptionBox = ({ content, theme }) => {
  const mock = [
    {
      title: 'Google Drive',
      subtitle:
        'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
      icon: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
    },
    {
      title: 'Google Ad Manager',
      subtitle:
        'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
      icon: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
    },
    {
      title: 'Atlassian',
      subtitle:
        'Keep your entire team in sync with development and easily manage tasks, goals, and deadlines. Easily manage and edit any Adwords campaign inline to improve ROI with constant review.',
      icon: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
    },
  ];

  return (
    <Box sx={{ background: theme.palette.zesty.zestyDarkBlue, py: 5 }}>
      <Container>
        <Box>
          <Box marginBottom={4}>
            <Box>
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h4',
                        sx: {
                          textAlign: 'center',
                          fontWeight: 'bold',
                          color: theme.palette.common.white,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          textAlign: 'center',
                          color: theme.palette.common.white,
                          lineHeight: 1.2,
                          mt: 2,
                        },
                      },
                    },
                  },
                }}
              >
                {content.logos_title || FillerContent.description}
              </MuiMarkdown>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {content.logos.data.map((item, i) => (
              <Grid item xs={12} md={2} key={i}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    marginBottom={2}
                    src={item.customer_logo?.data[0].url || ''}
                  />
                  {/* <Typography
                    variant={'h6'}
                    gutterBottom
                    align={'center'}
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.common.white,
                    }}
                  >
                    {item.customer_name}
                  </Typography>
                  <Typography
                    sx={{ color: theme.palette.zesty.zestyZambezi }}
                    align={'center'}
                  >
                    {item.subtitle}
                  </Typography> */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WithDarkBackgroundAndSimpleDescriptionBox;
