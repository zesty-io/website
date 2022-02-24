import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const mock = [
  {
    title: 'Built for developers',
    subtitle:
      'theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.',
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
    title: 'Designed to be modern',
    subtitle:
      'Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.',
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
    title: 'Documentation for everything',
    subtitle:
      'We\'ve written extensive documentation for components and tools, so you never have to reverse engineer anything.',
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

const FeaturesWithIllustration = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  let rich_text = (undefined !== props.rich_text) ? props.rich_text : ''
  let image_url = (undefined !== props.image_url) ? props.image_url : ''
  return (
    <Container>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={4} dangerouslySetInnerHTML={{__html:rich_text}}>
         
            </Box>
             <Box marginBottom={4}>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                <Typography color="primary" variant="inherit" component="span">
                  Develop anything
                </Typography>{' '}
                your business needs.
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                Build a beautiful, modern website with flexible, fully
                customizable, atomic MUI components.
              </Typography>
            </Box>
            <List disablePadding>
              {mock.map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemAvatar>
                    <Box
                      component={Avatar}
                      variant={'rounded'}
                      color={theme.palette.primary.dark}
                      bgcolor={`${theme.palette.primary.light}22`}
                    >
                      {item.icon}
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.subtitle}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={image_url}
              alt="Zesty Benefits Graphic"
              width={1}
              /*height={1}*/
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesWithIllustration;
