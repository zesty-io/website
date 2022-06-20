import React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';

const mock = [
  {
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
  },
  {
    name: 'Clara Bertoletti',
    title: 'MUI lover',
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
];

const TeamWithSmallSquarePhotos = ({ eyebrow, title, team, grid = 4 }) => {
  const theme = useTheme();

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
            {eyebrow}
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            {title}
          </Typography>
          {/* <Typography variant="h6" align={'center'} color={'text.secondary'}>
            We are a small agency of talented designers & developers.
          </Typography>
          <Box marginTop={2} display={'flex'} justifyContent={'center'}>
            <Button
              variant="contained"
              color="primary"
              size="large"
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
          </Box> */}
        </Box>
        <Grid container spacing={2}>
          {team
            .sort((a, b) => a.sort_order - b.sort_order)
            .map((item, i) => (
              <Grid item xs={12} sm={6} md={grid} key={i}>
                <Box sx={{ paddingBottom: 2 }}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar sx={{ marginRight: 3 }}>
                      <Avatar
                        src={item.headshot?.data[0]?.url || FillerContent.image}
                        variant={'rounded'}
                        sx={{ width: 100, height: 100, borderRadius: 2 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </ListItem>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TeamWithSmallSquarePhotos;
