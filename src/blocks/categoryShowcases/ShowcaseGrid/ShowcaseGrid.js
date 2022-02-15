import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Container from 'components/Container';

const mock = [
  {
    title: 'Adidas shoes',
    description:
      'Discover the new collection of Adidas. Starting at just $39.20',
    href: '#',
    image: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
  },
  {
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes. Starting at just $59.20',
    href: '#',
    image: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
  },
  {
    title: 'Sneakers',
    description:
      'Trendy Sneakers designed for everyone. The price is as low as $42.20',
    href: '#',
    image: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
  },
  {
    title: 'Denim',
    description: 'Denim jeans new arrivals. Starting at just $49.50',
    href: '#',
    image: 'https://assets.maccarianagency.com/backgrounds/img59.jpg',
  },
  {
    title: 'Jeans Jackets',
    description: 'New Jeans Jacket spring collection. Starting at just $22.90',
    href: '#',
    image: 'https://assets.maccarianagency.com/backgrounds/img60.jpg',
  },
  {
    title: 'Slim Jeans',
    description: 'Discover the Slim Jeans at as low as $12.90 price',
    href: '#',
    image: 'https://assets.maccarianagency.com/backgrounds/img61.jpg',
  },
];

const ShowcaseGrid = () => {
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
            <Grid key={i} item xs={12} sm={6} md={4}>
              <Box width={1} height={1} position={'relative'}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    filter: 'brightness(0.7)',
                    borderRadius: 8,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  position={'absolute'}
                  bottom={0}
                  left={0}
                  right={0}
                  width={1}
                  padding={2}
                  zIndex={2}
                >
                  <Typography
                    color={'common.white'}
                    fontWeight={700}
                    variant={'h6'}
                  >
                    {item.title}
                  </Typography>
                  <Typography color={'common.white'}>
                    {item.description}
                  </Typography>
                  <Link
                    href={item.href}
                    color={'common.white'}
                    fontWeight={700}
                    sx={{ marginTop: 2, display: 'block' }}
                  >
                    Shop now
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowcaseGrid;
