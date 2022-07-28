/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const mock = [
  {
    title: 'Brand awareness',
    subtitle:
      'We bring over 2,500 journalists from the world’s leading publications to TheFront. They’re part of the reason why the event has a global reach of over three billion. We can also work with you on bespoke content packages that will tell your story on a global scale.',
    icon: (
      <svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  },
  {
    title: 'Thought leadership',
    subtitle:
      'We can set up roundtables and workshops for you to host. You’ll be right in the middle of the action, leading discussions with targeted demographics on the topics that matter most to you.',
    icon: (
      <svg
        width={40}
        height={40}
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
    title: 'Networking',
    subtitle:
      'We have dedicated stages for every industry. Whether you want to hire tech’s top talent, meet with the policymakers influencing your industry, or exchange notes with your peers and competitors, we have the stage, lounge, and evening event for you.',
    icon: (
      <svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Lead generation',
    subtitle:
      "70,000 people will be joining us at Web Summit this November. They're deeply embedded in the fabric of their respective industries – the trendsetters dictating how quickly new technologies are adopted.",
    icon: (
      <svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const FeaturesWithMinimalDesign = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
          >
            Why to exhibit
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Creating remarkable opportunity for tech companies to exhibit at
            Italy's financial capital Milan.
          </Typography>
          <Typography variant="h6" align={'center'} color={'text.secondary'}>
            Our mission is to help you grow your business, meet and connect with
            people who share your passions.
            <br />
            We help you fulfill your best potential through an engaging
            lifestyle experience.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} md={3}>
              <ListItem
                component="div"
                disableGutters
                sx={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: 0,
                }}
              >
                <Box
                  component={ListItemAvatar}
                  marginBottom={1}
                  minWidth={'auto !important'}
                >
                  <Box color={theme.palette.primary.main}>{item.icon}</Box>
                </Box>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{
                    variant: 'h6',
                    gutterBottom: true,
                    align: 'left',
                  }}
                  secondaryTypographyProps={{ align: 'left' }}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 700,
                    },
                    margin: 0,
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesWithMinimalDesign;
