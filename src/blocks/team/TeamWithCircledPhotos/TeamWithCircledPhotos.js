/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';

const mock = [
  {
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
  {
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
  },
];

const TeamWithCircledPhotos = () => {
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
            fontWeight={700}
          >
            Support Team
          </Typography>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} align={'center'}>
            Our friendly support team will help you with anything
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            align={'center'}
          >
            We aim to take care of you. Need help with installation, find a bug,
            or just need a clarifiction about our documentation?
            <br />
            We'll be there to lend a helping hand.
          </Typography>
          <Box marginTop={2} display={'flex'} justifyContent={'center'}>
            <Button
              color={'primary'}
              variant={'contained'}
              size={'large'}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={20}
                  height={20}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            >
              Contact us
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <ListItem
                disableGutters
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                }}
              >
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    width={{ xs: 80, sm: 80, md: 120 }}
                    height={{ xs: 80, sm: 80, md: 120 }}
                    src={item.avatar}
                    marginRight={2}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.title} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TeamWithCircledPhotos;
