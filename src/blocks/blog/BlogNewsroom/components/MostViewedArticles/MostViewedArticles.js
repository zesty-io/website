import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Eiusmod tempor incididunt',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    date: '10 Sep',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Sed ut perspiciatis',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img23.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Unde omnis iste natus',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '05 Mar',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Eiusmod tempor incididunt',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    date: '10 Sep',
  },
];

const MostViewedArticles = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Latest stories
          </Typography>
          <Typography color={'text.secondary'}>
            Here’s what we’ve been up to recently.
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
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '30%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 200,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  width: { xs: 1, md: '70%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Box marginY={1}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.author.name} - {item.date}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MostViewedArticles;
