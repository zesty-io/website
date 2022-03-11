import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const mock = [
  {
    title: 'Adidas shoes',
    description:
      'Discover the new collection of Adidas. Starting at just $39.20',
    href: '/demos/ecommerce/product-overview',
    image: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
  },
  {
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes. Starting at just $59.20',
    href: '/demos/ecommerce/product-overview',
    image: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
  },
  {
    title: 'Sneakers',
    description:
      'Trendy Sneakers designed for everyone. The price is as low as $42.20',
    href: '/demos/ecommerce/product-overview',
    image: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
  },
];

const TopItems = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h5'} fontWeight={700}>
          Discover out top items
        </Typography>
      </Box>
      <ImageList
        variant="quilted"
        cols={2}
        rowHeight={'auto'}
        gap={isMd ? 32 : 16}
        sx={{ margin: 0 }}
      >
        {mock.map((item, i) => (
          <ImageListItem
            key={i}
            cols={isMd ? 1 : 2}
            rows={isMd ? (i === 0 ? 2 : 1) : 1}
            sx={{ borderRadius: 2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              style={{
                filter: 'brightness(0.7)',
                borderRadius: 8,
              }}
            />
            <Box
              position={'absolute'}
              top={0}
              left={0}
              right={0}
              width={1}
              padding={4}
              zIndex={2}
            >
              <Typography
                color={'common.white'}
                fontWeight={700}
                variant={'h4'}
              >
                {item.title}
              </Typography>
              <Typography color={'common.white'} variant={'h6'}>
                {item.description}
              </Typography>
              <Button
                component={Link}
                href={item.href}
                variant={'contained'}
                color={'primary'}
                sx={{ marginTop: 2 }}
              >
                Shop now
              </Button>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default TopItems;
