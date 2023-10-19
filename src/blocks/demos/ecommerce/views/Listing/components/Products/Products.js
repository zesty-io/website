import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

import { ProductQuickViewDialog } from './components';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    title: 'Adidas shoes',
    description: 'Discover the new collection of Adidas.',
    price: '$69.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 12,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: 'Colorful shoes',
    description: 'Colorful shoes designed for everyone.',
    price: '$39.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 6,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes.',
    price: '$49.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 8,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    title: 'Sneakers',
    description: 'Trendy Sneakers designed for everyone.',
    price: '$59.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 10,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    title: 'Adidas shoes',
    description: 'Discover the new collection of Adidas.',
    price: '$69.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 12,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: 'Colorful shoes',
    description: 'Colorful shoes designed for everyone.',
    price: '$39.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 6,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes.',
    price: '$49.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 8,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    title: 'Sneakers',
    description: 'Trendy Sneakers designed for everyone.',
    price: '$59.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 10,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    title: 'Adidas shoes',
    description: 'Discover the new collection of Adidas.',
    price: '$69.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 12,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img63.jpg',
    title: 'Colorful shoes',
    description: 'Colorful shoes designed for everyone.',
    price: '$39.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 6,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    title: 'Nike',
    description: 'New arrivals of Nike sport shoes.',
    price: '$49.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 5,
    reviewCount: 8,
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img58.jpg',
    title: 'Sneakers',
    description: 'Trendy Sneakers designed for everyone.',
    price: '$59.90',
    href: '/demos/ecommerce/product-overview',
    reviewScore: 4,
    reviewCount: 10,
  },
];

const Products = () => {
  const theme = useTheme();
  const [openId, setOpenId] = useState(null);

  return (
    <Grid container spacing={{ xs: 4, md: 2 }}>
      {mock.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box display={'block'} width={1} height={1}>
            <Card
              sx={{
                width: 1,
                height: 1,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                bgcolor: 'transparent',
                backgroundImage: 'none',
              }}
            >
              <CardMedia
                title={item.title}
                image={item.media}
                sx={{
                  position: 'relative',
                  height: 320,
                  overflow: 'hidden',
                  borderRadius: 2,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              >
                <Box
                  padding={2}
                  bgcolor={'background.paper'}
                  boxShadow={2}
                  borderRadius={2}
                  position={'absolute'}
                  top={16}
                  right={16}
                  display={'flex'}
                  alignItems={'center'}
                  sx={{ cursor: 'pointer' }}
                >
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={20}
                    height={20}
                    color={'text.primary'}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </Box>
                </Box>
              </CardMedia>
              <Box
                marginTop={2}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Typography
                  fontWeight={700}
                  noWrap
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Typography fontWeight={700}>{item.price}</Typography>
              </Box>
              <Box marginTop={0.5} display={'flex'} alignItems={'center'}>
                <Box display={'flex'} alignItems={'center'}>
                  {[1, 2, 3, 4, 5].map((r) => (
                    <Box
                      key={r}
                      component={'svg'}
                      color={
                        r <= item.reviewScore
                          ? theme.palette.secondary.main
                          : theme.palette.divider
                      }
                      width={16}
                      height={16}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </Box>
                  ))}
                </Box>
                <Typography
                  variant={'caption'}
                  color={'text.secondary'}
                  marginLeft={0.5}
                >
                  {item.reviewCount} reviews
                </Typography>
              </Box>
              <Stack marginTop={2} spacing={1} direction={'row'}>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  size={'large'}
                  fullWidth
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={20}
                    height={20}
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </Button>
                <Button
                  color={'primary'}
                  size={'large'}
                  fullWidth
                  sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
                  onClick={() => setOpenId(i)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={20}
                    height={20}
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Stack>
              <Button
                component={Link}
                href={item.href}
                size={'large'}
                sx={{
                  color: theme.palette.text.primary,
                  marginTop: 1,
                  justifyContent: 'space-between',
                }}
                fullWidth
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={20}
                    height={20}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                See the details
              </Button>
            </Card>
            <ProductQuickViewDialog
              open={openId === i}
              onClose={() => setOpenId(null)}
              imageSrc={item.media}
              details={{
                title: item.title,
                description: item.description,
                price: item.price,
                href: item.href,
                reviewScore: 5,
                reviewCount: 12,
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
