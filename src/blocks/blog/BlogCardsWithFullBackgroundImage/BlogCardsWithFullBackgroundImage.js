import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet,',
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
];

const BlogCardsWithFullBackgroundImage = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Case studies
          </Typography>
          <Typography color={'text.secondary'}>
            In-depth looks at our work.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                justifyContent={{
                  xs: 'center',
                  md: i % 2 === 1 ? 'flex-end' : 'flex-start',
                }}
                sx={{
                  minHeight: 300,
                  backgroundImage: `url("${item.image}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&:after': {
                    position: 'absolute',
                    content: '" "',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                    background: '#161c2d',
                    opacity: 0.6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: 'relative',
                    width: { xs: 1, md: '50%' },
                    height: 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant={'h5'}
                      gutterBottom
                      sx={{ color: 'common.white' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ color: 'common.white', opacity: 0.8 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Divider
                      sx={{
                        marginY: 2,
                        borderColor: 'common.white',
                        opacity: 0.4,
                      }}
                    />
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        <Avatar
                          src={item.author.avatar}
                          sx={{ marginRight: 1 }}
                        />
                        <Typography
                          color={'text.secondary'}
                          sx={{ color: 'common.white', opacity: 0.8 }}
                        >
                          {item.author.name}
                        </Typography>
                      </Box>
                      <Typography
                        color={'text.secondary'}
                        sx={{ color: 'common.white', opacity: 0.8 }}
                      >
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogCardsWithFullBackgroundImage;
