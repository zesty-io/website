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
    title: 'Coworking communities',
    subtitle:
      'Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.',
    icon: (
      <svg
        width={32}
        height={32}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Flexible contracts',
    subtitle:
      'Stay as little as 3 months with rolling contracts. Like it here? This is your space, so stay as long as you want.',
    icon: (
      <svg
        width={32}
        height={32}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: 'All inclusive',
    subtitle:
      'Monthly fee covers everything you need hassle free. Keep cool and focus on what matters to you.',
    icon: (
      <svg
        width={32}
        height={32}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: 'Hospitality service',
    subtitle:
      '24/7 support. No more hidden prices. It is your workingplace, playground, relax room.',
    icon: (
      <svg
        width={32}
        height={32}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

const FeaturesWithSimpleIcons = () => {
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
            color={'secondary'}
            align={'center'}
          >
            Advantages
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            We are reimagining renting to help you achieve your dreams
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
                  alignItems: 'center',
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
                    align: 'center',
                  }}
                  secondaryTypographyProps={{ align: 'center' }}
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

export default FeaturesWithSimpleIcons;
