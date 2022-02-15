import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    title: 'Idea',
    subtitle:
      'We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project.',
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
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Design',
    subtitle:
      'We start by designing a mockup or prototype of your website/app, and present it to you. Once with the initial mockup, we start the revision process to perfect it.',
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Development',
    subtitle:
      'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, and super scalable website.',
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Launch & Maintenance',
    subtitle:
      'When the project is ready, we help you to launch it and push it live. After that, we meet with your team to train them on how to edit, update and scale it.',
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
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  const theme = useTheme();

  return (
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
          Services
        </Typography>
        <Typography
          fontWeight={700}
          variant={'h4'}
          align={'center'}
          gutterBottom
          data-aos={'fade-up'}
        >
          We are a small agency of talented designers & developers.
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Unlike teams from big agencies, we will treat your project as ours.
          <br />
          We will walk you through our smooth and simple process.
        </Typography>
        <Box
          marginTop={2}
          display={'flex'}
          justifyContent={'center'}
          data-aos={'fade-up'}
        >
          <Button color={'primary'} variant={'contained'} size={'large'}>
            Contact us
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
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
    </Box>
  );
};

export default Services;
