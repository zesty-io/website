import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    title: '24/7 Support',
    subtitle: 'Contact us 24 hours a day, 7 days a week.',
    icon: (
      <svg
        width={42}
        height={42}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    title: '30 Days return',
    subtitle: 'We offer you a full refund within 30 days of purchase.',
    icon: (
      <svg
        width={42}
        height={42}
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
    title: 'Fast delivery',
    subtitle: 'Automatically receive free standard shipping on every order.',
    icon: (
      <svg
        width={42}
        height={42}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      {mock.map((item, i) => (
        <Grid key={i} item xs={12} md={4}>
          <ListItem
            component="div"
            disableGutters
            sx={{
              alignItems: 'flex-start',
              padding: 0,
            }}
          >
            <ListItemAvatar>
              <Box color={theme.palette.primary.main}>{item.icon}</Box>
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={item.subtitle}
              primaryTypographyProps={{
                variant: 'h6',
                gutterBottom: true,
                sx: { fontWeight: 700 },
              }}
              sx={{
                margin: 0,
              }}
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
