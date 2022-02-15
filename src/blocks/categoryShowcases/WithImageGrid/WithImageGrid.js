import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Container from 'components/Container';

const mock = [
  {
    title: 'T-shirts',
    price: '$39.20',
    href: '#',
    images: [
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img54.jpg',
      },
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img53.jpg',
      },
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img55.jpg',
      },
    ],
  },
  {
    title: 'Sport shoes',
    price: '$89.00',
    href: '#',
    images: [
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
      },
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
      },
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
      },
    ],
  },
  {
    title: 'Jeans',
    price: '$29.40',
    href: '#',
    images: [
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img59.jpg',
      },
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img60.jpg',
      },
      {
        title: '',
        src: 'https://assets.maccarianagency.com/backgrounds/img61.jpg',
      },
    ],
  },
];

const WithImageGrid = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box marginBottom={2}>
          <Typography variant={'h6'} fontWeight={700}>
            Categories
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Card variant={'outlined'}>
                <ImageList
                  variant="quilted"
                  cols={2}
                  rowHeight={140}
                  sx={{ margin: 0 }}
                >
                  {item.images.map((image, j) => (
                    <ImageListItem key={j} cols={1} rows={j === 0 ? 2 : 1}>
                      <img
                        src={image.src}
                        alt={image.title}
                        loading="lazy"
                        style={{
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0.7)'
                              : 'none',
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <Box
                  padding={4}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography variant={'h5'} fontWeight={700} align={'center'}>
                    {item.title}
                  </Typography>
                  <Typography
                    align={'center'}
                    color={'text.secondary'}
                    marginY={2}
                  >
                    Starting at {item.price}
                  </Typography>
                  <Button
                    component={'a'}
                    href={item.href}
                    variant={'contained'}
                    color={'primary'}
                    size={'large'}
                  >
                    View all
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WithImageGrid;
