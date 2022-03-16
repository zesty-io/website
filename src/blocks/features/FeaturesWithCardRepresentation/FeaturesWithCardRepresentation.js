/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {
  People,
  Public,
  Security,
  Schema,
  Build,
  FindInPage,
} from '@mui/icons-material';
import Icons from '@mui/icons-material';
import Container from 'components/Container';
import { Button, useMediaQuery } from '@mui/material';
import FillerContent from 'components/FillerContent';

const switchIcon = (icon) => {
  switch (icon) {
    case 'people':
      return <People />;
    case 'find_in_page':
      return <FindInPage />;
    case 'security':
      return <Security />;
    case 'public':
      return <Public />;
    case 'schema':
      return <Schema />;
    case 'build':
      return <Build />;
    default:
      return <People />;
  }
};

const mock = [
  {
    title: 'Themeable',
    subtitle:
      'Customize any part of our components to match your design needs.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Light and Dark UI',
    subtitle:
      'Optimized for multiple color modes. Use light or dark, your choice.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: 'Composable',
    subtitle:
      'Designed with composition in mind. Compose new components with ease.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Developer Experience',
    subtitle:
      'Guaranteed to boost your productivity when building your app or website.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Continuous Updates',
    subtitle: 'We continually deploy improvements and new updates to theFront.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'Free support',
    subtitle:
      '6 months of free technical support to help you build your website faster.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const FeaturesWithCardRepresentation = ({
  description,
  cards,
  cta,
  cta_url,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const cardList = cards || mock;
  return (
    <Box bgcolor={'alternate.main'}>
      <Grid container justifyContent="center" paddingTop={4}>
        <Typography variant="h4">
          <Box
            sx={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{
              __html: description || FillerContent.description,
            }}
          ></Box>
        </Typography>
      </Grid>
      <Container>
        <Grid container spacing={4}>
          {cardList?.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box component={Card} padding={4} width={1} height={1}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {switchIcon(item.icon_name)}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.feature_name || item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.content || item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* <Grid container justifyContent="center" marginTop={4}>
          <Button
            alignItems={'center'}
            href={cta_url || FillerContent.href}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            {cta || FillerContent.cta}
          </Button>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default FeaturesWithCardRepresentation;
