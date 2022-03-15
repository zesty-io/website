/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';

const mock = [
  {
    title: '99.99% uptime',
    subtitle:
      'Zesty.io builds, renders, and delivers web pages at 99.99% uptime.',
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
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Minimize IT costs',
    subtitle:
      'Save up to 70% and reallocate your resources toward initiatives that drive your business forward.',
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
    title: 'Sub second page load times',
    subtitle:
      'Zesty.io sites are automatically cached and served globally, so your pages will load faster without any additional optimization on your end.',
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const SimpleCentered = ({ header, description, cards }) => {
  const theme = useTheme();
  const data = cards || mock;
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Box
              dangerouslySetInnerHTML={{
                __html: header || FillerContent.header,
              }}
            ></Box>
            {/* <Typography
              variant="h4"
              color="text.primary"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              {header || 'Build accessible React apps with speed'}
            </Typography> */}
            {/* <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              align={'center'}
            >
              {description ||
                `
              Build a beautiful, modern website with flexible, fully
              customizable, atomic MUI components.
              `}
            </Typography> */}
          </Box>
        </Box>
        <Grid container spacing={2}>
          {data?.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.1)}
                    color={theme.palette.primary.main}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                    align={'center'}
                  >
                    {item.title}
                  </Typography>
                  <Typography align={'center'} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleCentered;
